import { describe, expect, it } from "vitest";
import { servicesData as serviceDetails } from "@/constants/servicesData";
import { servicesData as serviceCards } from "@/constants/siteData";

describe("services card data", () => {
  it("has unique, non-empty slugs and ids", () => {
    const slugs = serviceCards.map((s) => s.slug);
    expect(slugs.every((s) => typeof s === "string" && s.length > 0)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
    const ids = serviceCards.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has a title and description for every service", () => {
    serviceCards.forEach((s) => {
      expect(s.title.trim()).not.toBe("");
      expect(s.description.trim()).not.toBe("");
    });
  });
});

describe("service detail data", () => {
  const entries = Object.entries(serviceDetails);

  it("has url-safe keys and unique service_id values", () => {
    expect(entries.length).toBeGreaterThan(0);
    // Accepts lowercase kebab-case, e.g. "strategic-planning"; rejects "Strategic Planning".
    const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    entries.forEach(([key]) => expect(key).toMatch(kebab));
    const ids = entries.map(([, v]) => v.service_id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has a title and hero for every service", () => {
    entries.forEach(([, v]) => {
      expect(v.title.trim()).not.toBe("");
      expect(v.hero.title.trim()).not.toBe("");
    });
  });
});
