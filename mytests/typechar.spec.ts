import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Test type character sequentially', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://www.flipkart.com/');


    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially("macbook", {delay: 500});

    await page.waitForTimeout(2000);
    await browser.close();
});
