import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';

test('Test Single file upload', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

    //Use Node's path module to safely resolve file path
    //single file upload
    // const filePath = path.resolve('C:/Users/BS01648/Downloads/logo.png');
    // await page.locator('input[name="upfile"]').setInputFiles(filePath);
    // await page.waitForTimeout(2000);

    //deselect file
    //await page.locator('input[name="upfile"]').setInputFiles([]);

    //uplload the file from buffer
    const fileBuffer = path.resolve('C:/Users/BS01648/Downloads/logo.png');
    await page.locator('input[name="upfile"]').setInputFiles({
        name: 'logo.png',
        mimeType: 'image/png',
        buffer: Buffer.from('test image file')
    });

    await page.waitForTimeout(7000);
    await browser.close();
});
