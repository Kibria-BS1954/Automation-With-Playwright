import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Test focus element', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://orangehrm.com/30-day-free-trial/');
    await page.getByText('Allow all').focus();
    await page.getByText('Allow all').click();

    const fullName = await page.locator('#Form_getForm_subdomain');
    fullName.focus();
    await fullName.fill('Ashadul');

    await page.waitForTimeout(2000);
    await browser.close();
});
