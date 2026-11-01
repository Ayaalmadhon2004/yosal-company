import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const FALLBACK = "https://yosal-company.vercel.app";

async function loadSiteUrl(): Promise<string> {
  vi.resetModules();
  const mod = await import("@/lib/seo");
  return mod.SITE_URL;
}

describe("SITE_URL", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("falls back to the default when the env var is missing", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(await loadSiteUrl()).toBe(FALLBACK);
  });

  it("uses the env var when provided", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.com");
    expect(await loadSiteUrl()).toBe("https://example.com");
  });

  it("strips one or many trailing slashes", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.com/");
    expect(await loadSiteUrl()).toBe("https://example.com");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.com///");
    expect(await loadSiteUrl()).toBe("https://example.com");
  });
});
