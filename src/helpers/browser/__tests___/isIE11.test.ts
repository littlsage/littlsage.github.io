/* eslint-disable @typescript-eslint/no-explicit-any */
import { isIE11 } from "@app/helpers/browser/isIE11";

import * as detectBrowser from "detect-browser";

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  __esModule: true,
  detect: (): Detect => ({ name: "chrome" }),
}));

describe("helpers / browser / isIE11", () => {
  test("should return true if detect name is 'ie'", () => {
    const mockdetectBrowser: any = detectBrowser as unknown as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "ie" });

    expect(isIE11()).toBeTruthy();
  });

  test("should return false if detect name is not 'ie'", () => {
    const mockdetectBrowser: any = detectBrowser as unknown as jest.Mock;
    mockdetectBrowser.detect = () => ({ name: "safari" });

    expect(isIE11()).toBeFalsy();
  });
});
