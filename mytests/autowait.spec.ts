import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test.use({
    actionTimeout: 15000
});

test('Test focus element', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    // page.setDefaultTimeout(15000);

    await page.goto('https://classic.freecrm.com/register/');

    await page.locator('input[name="agreeTerms"]').check();
    

    // await page.waitForTimeout(2000);
    // await browser.close();
});
