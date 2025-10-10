import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';

test('login test with two users', async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    // Context 1
    const browserContext_1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext_1.newPage();

    // Context 2
    const browserContext_2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext_2.newPage();

    // Browser 1 actions
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId1 = page1.locator('[name="email"]');
    const password1 = page1.locator('[name="password"]');
    const loginButton1 = page1.locator('input[value="Login"]');

    await emailId1.fill('pwtest@opencart.com');
    await password1.fill('playwright@123');
    await loginButton1.click();

    // Browser 2 actions
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId2 = page2.locator('[name="email"]');
    const password2 = page2.locator('[name="password"]');
    const loginButton2 = page2.locator('input[value="Login"]');

    await emailId2.fill('userpw@pw.com');
    await password2.fill('Test@123');
    await loginButton2.click();

    // Keep open for 5 seconds to observe
    await page1.waitForTimeout(8000);
    await browser.close();
    //await new Promise(() => { });
});
