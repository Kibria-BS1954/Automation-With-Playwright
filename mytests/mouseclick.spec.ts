import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Test mouse click events', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    
    //await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
    await page.goto('https://the-internet.hackerearth.com/shifting_content');

    //Double click
    //await page.getByText('Double-Click Me To See Alert').dblclick();
    
    //Right click
    //await page.getByText('right click me').click({ button: 'right' });

    //shift click
    await page.getByText('Example 1: Menu Element').click({ modifiers: ['Shift'] });
    

    await page.waitForTimeout(2000);
    await browser.close();
});
