import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Chaining locator test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://orangehrm.com/30-day-free-trial/');

    //await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Ashadul'); 
    //await page.locator('form#Form_getForm >> text=Get Your Free Trial').click(); 

    // const form = page.locator('form#Form_getForm');
    // const getYourFreeTrial = page.getByRole('button', { name: 'Get Your Free Trial' });

    await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();


    // await form.locator(getYourFreeTrial).click();



    await page.waitForTimeout(2000);
    await browser.close();
});
