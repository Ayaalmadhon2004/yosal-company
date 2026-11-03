import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { extractPosts, submitProjectRequest } from "@/lib/api";
import type { Post, PostsResponse } from "@/types/api";

const HTTP_OK = 200;
const HTTP_UNPROCESSABLE = 422;
const HTTP_SERVER_ERROR = 500;
const TWO_POSTS = [1, 2];

const post = (id: number) => ({ id, slug: `p-${id}` }) as unknown as Post;

describe("extractPosts", () => {
  it("returns the array when data is a plain array", () => {
    const posts = TWO_POSTS.map(post);
    expect(extractPosts({ data: posts } as unknown as PostsResponse)).toEqual(posts);
  });

  it("unwraps paginated data.data", () => {
    const posts = [post(1)];
    expect(
      extractPosts({ data: { data: posts } } as unknown as PostsResponse),
    ).toEqual(posts);
  });

  it("returns an empty array for null, undefined or empty responses", () => {
    expect(extractPosts(null)).toEqual([]);
    expect(extractPosts(undefined)).toEqual([]);
    expect(extractPosts({} as PostsResponse)).toEqual([]);
  });
});

function jsonResponse(body: unknown, status = HTTP_OK): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("submitProjectRequest", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("sends payload fields as query params with POST and skips empty ones", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ status: "Success" }));

    const result = await submitProjectRequest({
      phone: "0500000000",
      name: "Aya",
      email: "",
      project_url: undefined,
    });

    expect(result.status).toBe("Success");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    const parsed = new URL(String(url));
    expect(parsed.searchParams.get("phone")).toBe("0500000000");
    expect(parsed.searchParams.get("name")).toBe("Aya");
    expect(parsed.searchParams.has("email")).toBe(false);
    expect(parsed.searchParams.has("project_url")).toBe(false);
    expect(init.method).toBe("POST");
    expect(init.body).toBeUndefined();
  });

  it("sends the attachment in a FormData body, not in the query", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ status: "Success" }));
    const file = new File(["hello"], "brief.txt", { type: "text/plain" });

    await submitProjectRequest({ phone: "0500000000", attachment: file });

    const [url, init] = fetchMock.mock.calls[0];
    expect(new URL(String(url)).searchParams.has("attachment")).toBe(false);
    expect(init.body).toBeInstanceOf(FormData);
    const sent = (init.body as FormData).get("attachment") as File;
    expect(sent.name).toBe("brief.txt");
  });

  it("maps a non-ok response to an Error using the server message", async () => {
    fetchMock.mockResolvedValue(
      jsonResponse({ status: "Error", message: "رقم الهاتف غير صالح" }, HTTP_UNPROCESSABLE),
    );
    const result = await submitProjectRequest({ phone: "x" });
    expect(result.status).toBe("Error");
    expect(result.message).toBe("رقم الهاتف غير صالح");
  });

  it("maps a non-ok response without a JSON body to a generic Error", async () => {
    fetchMock.mockResolvedValue(new Response("oops", { status: HTTP_SERVER_ERROR }));
    const result = await submitProjectRequest({ phone: "x" });
    expect(result.status).toBe("Error");
    expect(result.message).toBeTruthy();
  });

  it("returns an Error with a message when the network fails", async () => {
    fetchMock.mockRejectedValue(new TypeError("network down"));
    const result = await submitProjectRequest({ phone: "x" });
    expect(result.status).toBe("Error");
    expect(result.message).toBeTruthy();
  });
});
