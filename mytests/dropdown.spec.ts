import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('Select based Dropdown test', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PHRR');

    const countryDropdown = 'select#Contact_CountryCode';

    //await page.selectOption(countryDropdown, {value: 'AD'});
    //await page.selectOption(countryDropdown, { label: 'Australia' });
    //await page.selectOption(countryDropdown, { index: 4 });

    const allOptions = await page.$$(countryDropdown + '> option');
    console.log(allOptions.length);

    for(const e of allOptions){
        const text = await e.textContent();
        console.log(text);

        if(text === 'Bangladesh'){
            await page.selectOption(countryDropdown, { label: text });
            break;
        }
    }


    await page.waitForTimeout(2000);
    await browser.close();
});
