import { describe, expect, it } from "vitest";
import { localeFromRedirectPath, safeRedirectPath } from "@/lib/auth/redirects";

describe("safeRedirectPath", () => {
  it("allows localised application paths with query parameters", () => {
    expect(
      safeRedirectPath(
        "/en/skills/example?authAction=favourite&resourceId=skill-1",
      ),
    ).toBe("/en/skills/example?authAction=favourite&resourceId=skill-1");
  });

  it("rejects absolute, protocol-relative and non-localised redirects", () => {
    expect(safeRedirectPath("https://example.com", "en")).toBe("/en");
    expect(safeRedirectPath("//example.com", "ms")).toBe("/ms");
    expect(safeRedirectPath("/auth/callback", "en")).toBe("/en");
  });

  it("rejects backslash-based external redirects", () => {
    expect(safeRedirectPath("/\\example.com", "ms")).toBe("/ms");
  });
});

describe("localeFromRedirectPath", () => {
  it("derives English only from an English route", () => {
    expect(localeFromRedirectPath("/en/favourites")).toBe("en");
    expect(localeFromRedirectPath("/ms/favourites")).toBe("ms");
  });
});
