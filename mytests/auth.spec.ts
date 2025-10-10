import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Page, Locator } from '@playwright/test';

test('auth test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    //await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await page.waitForTimeout(5000);
    
    const username= 'admin';
    const password = 'admin';
    const authHeader = 'basic' + btoa(username+':' + password);
    page.setExtraHTTPHeaders({Authorization: authHeader});
    await page.reload();
    const successMessage: Locator = page.locator('text=Congratulations! You must have the proper credentials.');
    await expect(successMessage).toBeVisible();


    await browser.close();
    // await new Promise(() => { });

});
