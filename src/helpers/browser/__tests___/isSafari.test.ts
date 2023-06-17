import { isSafari } from "@app/helpers/browser/isSafari";

import * as detectBrowser from "detect-browser";

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  __esModule: true,
  detect: (): Detect => ({ name: "chrome" }),
}));

describe("helpers / browser / isSafari", () => {
  test("should return true if detect name is 'safari'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = detectBrowser as unknown as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "safari" });

    expect(isSafari()).toBeTruthy();
  });

  test("should return false if detect name is not 'safari'", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockdetectBrowser: any = detectBrowser as unknown as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "chrome" });

    expect(isSafari()).toBeFalsy();
  });
});
