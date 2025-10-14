import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Test move to element', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    page.getByText('Add-ons').first().hover();
    //page.getByText('Taxi').first().click();
    page.getByText('Visa Service').first().click();
    


    await page.waitForTimeout(2000);
    await browser.close();
});
