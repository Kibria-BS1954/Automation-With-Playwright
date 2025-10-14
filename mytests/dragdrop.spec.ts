import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Drag and Drop test', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/droppable/');

    // //single:
    // // ✅ Switch to the iframe that contains the draggable elements
    //const frameLocator = page.frameLocator('.demo-frame');

    // // ✅ Drag and drop inside the iframe
    // await frameLocator.locator('#draggable').dragTo(frameLocator.locator('#droppable'));

    //Multiple commands
    // ✅ Get the actual frame (not frameLocator)
  const frameElementHandle = await page.$('.demo-frame');
  const frame = await frameElementHandle?.contentFrame();
// ✅ Locate draggable and droppable elements inside the iframe
  const draggable = frame ? await frame.locator('#draggable') : undefined;
  const droppable = frame ? await frame.locator('#droppable') : undefined;

  // ✅ Get element bounding boxes
  if (draggable && droppable) {
    const dragBox = await draggable.boundingBox();
    const dropBox = await droppable.boundingBox();

    if (dragBox && dropBox) {
      // ✅ Use page.mouse for movement
      await page.mouse.move(dragBox.x + dragBox.width / 2, dragBox.y + dragBox.height / 2);
      await page.mouse.down();
      await page.mouse.move(dropBox.x + dropBox.width / 2, dropBox.y + dropBox.height / 2);
      await page.mouse.up();
    }
  }

  await page.waitForTimeout(2000);
    await browser.close();
  
});