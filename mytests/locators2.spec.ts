import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Custom locator test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //data-testid
    await page.getByTestId('input-firstname').fill('Ashadul');
    

    await page.waitForTimeout(5000);
    await browser.close();
});
