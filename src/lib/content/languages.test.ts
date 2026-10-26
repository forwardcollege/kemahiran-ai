import { describe, expect, it } from "vitest";
import { getCounterpartPath, type LocalizedRoute } from "./languages";

const localizedRoutes: LocalizedRoute[] = [
  {
    ms: "/ms/llm-prompts/balas-pertanyaan-atau-aduan-pelanggan",
    en: "/en/llm-prompts/respond-to-customer-enquiry-or-complaint",
  },
];

describe("getCounterpartPath", () => {
  it("uses the paired English slug for a Malay resource route", () => {
    expect(
      getCounterpartPath(
        "/ms/llm-prompts/balas-pertanyaan-atau-aduan-pelanggan",
        "ms",
        localizedRoutes,
      ),
    ).toBe("/en/llm-prompts/respond-to-customer-enquiry-or-complaint");
  });

  it("uses the paired Malay slug for an English resource route", () => {
    expect(
      getCounterpartPath(
        "/en/llm-prompts/respond-to-customer-enquiry-or-complaint",
        "en",
        localizedRoutes,
      ),
    ).toBe("/ms/llm-prompts/balas-pertanyaan-atau-aduan-pelanggan");
  });

  it("falls back to replacing the locale for shared catalogue paths", () => {
    expect(getCounterpartPath("/ms/llm-prompts", "ms", localizedRoutes)).toBe(
      "/en/llm-prompts",
    );
  });
});
