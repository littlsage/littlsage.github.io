import { test, expect } from "@playwright/test";
import { apiGithubCom } from "../mock/apiGithubCom";

test.beforeEach(async ({ page }) => {
  await page.route(
    "https://api.github.com/repos/alan-hadyk/portfolio/commits",
    async (route) => {
      const json = apiGithubCom["repos/alan-hadyk/portfolio/commits"];

      await route.fulfill({ json });
    },
  );

  await page.goto("/");
});

test.describe("Skills", () => {
  test("should be displayed at tv width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1921,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );

    await page.waitForLoadState("networkidle");

    await page.click("a[data-id='Skills']");

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at wide desktop width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1700,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );

    await page.waitForLoadState("networkidle");

    await page.click("a[data-id='Skills']");

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at narrow desktop width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1300,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );

    await page.waitForLoadState("networkidle");

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at tablet width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1000,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );

    await page.waitForLoadState("networkidle");

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at mobile width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 650,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );

    await page.waitForLoadState("networkidle");

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });
});
