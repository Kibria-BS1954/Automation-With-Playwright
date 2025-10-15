import { test, expect, chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import path from 'path';

test('Test Multiple file upload', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();

  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // file paths safely
  const filePath1 = path.resolve('C:/Users/BS01648/Downloads/logo.png');
  const filePath2 = path.resolve('C:/Users/BS01648/Downloads/footer-cards.png');
  const filePath3 = path.resolve('C:/Users/BS01648/Downloads/lazy-load.png');

  //for multiple files
  await page.locator('input[name="filesToUpload"]').setInputFiles([
    filePath1,
    filePath2,
    filePath3
  ]);

  await page.waitForTimeout(3000);
  await browser.close();
});
