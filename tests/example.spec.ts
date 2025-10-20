import { test, expect, chromium } from "@playwright/test";
import type { Browser, BrowserContext, Page, Locator } from "@playwright/test";

// test.skip("has title", async ({}) => {
//   const browser: Browser = await chromium.launch({
//     headless: false,
//     channel: "chrome",
//   });
//   const page: Page = await browser.newPage();

//   await page.goto("https://www.example.com");
//   const pageTitle = page.locator("h1");
//   await expect(pageTitle).toHaveText("Example Domain");

//   await page.waitForTimeout(2000);
//   await browser.close();
// });

// test.only("example test", async ({}) => {
//   const browser: Browser = await chromium.launch({
//     headless: false,
//     channel: "chrome",
//   });
//   const page: Page = await browser.newPage();
//   await page.goto("http://zero.webappsecurity.com/");
//   await page.click(
//     "//button[@id='signin_button' and contains(@class, 'signin') and contains(@class, 'btn-info')]"
//   );
//   await page.click(
//     "//input[@type='submit' and @name='submit' and @value='Sign in' and contains(@class, 'btn-primary')]"
//   );

//   const errorMessage = await page.locator("//div[@class ='alert alert-error']");
//   await expect(errorMessage).toContainText("Login and/or password are wrong.");

//   await page.waitForTimeout(2000);
//   await browser.close();
// });

test.describe("My First Test Suite", () => {
  test("example test", async ({}) => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("http://zero.webappsecurity.com/");
  await page.click(
    "//button[@id='signin_button' and contains(@class, 'signin') and contains(@class, 'btn-info')]"
  );
  await page.click(
    "//input[@type='submit' and @name='submit' and @value='Sign in' and contains(@class, 'btn-primary')]"
  );

  const errorMessage = await page.locator("//div[@class ='alert alert-error']");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");

  await page.waitForTimeout(2000);
  await browser.close();
});

test("Assertions example", async ({}) => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.example.com");
  await expect(page).toHaveURL("https://www.example.com/");
  await expect(page).toHaveTitle("Example Domain");

  const element = await page.locator("h1");
  await expect(element).toBeVisible();
  await expect(element).toHaveText("Example Domain");
  await expect(element).toHaveCount(1);

  const nonExistingElement = await page.locator("h2");
  await expect(nonExistingElement).not.toBeVisible();

  await page.waitForTimeout(2000);
  await browser.close();
});
});

test.describe.only("Hook", () => {
  test.beforeEach(async ({}) => {
    const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.example.com");
  });
});

// test.only("has title", async ({}) => {
//   const browser: Browser = await chromium.launch({
//     headless: false,
//     channel: "chrome",
//   });
//   const page: Page = await browser.newPage();
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test("example test", async ({ page }) => {
//   await page.goto("https://example.com");
//   const title = page.locator("h1");
//   await expect(title).toHaveText("Example Domain");
// });
