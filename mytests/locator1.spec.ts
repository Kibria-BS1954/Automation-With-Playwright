import { test, expect, chromium } from '@playwright/test';
import type { Browser, BrowserContext, Locator, Page } from '@playwright/test';

test('locator test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // create web element(locator) + perform action on it(click, fill, check, uncheck, selectOption, ...)
    //1. ID: unique
    const firstName:Locator = page.locator('id=input-firstname');
    const lastName:Locator = page.locator('id=input-lastname');

    await firstName.fill('Ashadul');
    await lastName.fill('Kibria');

    //2. Class name
    const logo:Locator = page.locator('.img-responsive');
    const logoExist =  await logo.isEnabled(); 
    console.log('logoExist--->', logoExist);  
    
    //3. Text locator
    const header:Locator = page.locator('text=Register Account');
    const headerExist = await header.isEnabled();
    console.log('headerExist--->', headerExist);

    const continueBtn:Locator = page.locator('text=Continue');
    const continueBtnExist = await continueBtn.isEnabled();
    console.log('continueBtnExist--->', continueBtnExist);

    const forgetPwdLink:Locator = page.locator('text=Forgotten Password');
    const forgetPwdLinkExist = await forgetPwdLink.isEnabled();
    console.log('forgetPwdLinkExist--->', forgetPwdLinkExist);

    //4. Css locators
    const email:Locator = page.locator('css=input#input-email');
    const telePhone:Locator = page.locator('css=input[name="telephone"]');
    const privacyCheckBox:Locator = page.locator('css=input[type="checkbox"]');

    await email.fill('jucse282096@gmail.com');
    await telePhone.fill('01774862878');
    await privacyCheckBox.click();

    //5. Xpath locators
    const password:Locator = page.locator('xpath=//input[@id="input-password"]');
    const search:Locator = page.locator('xpath=//input[@name="search" and @type="text"]');

    await password.fill('test@123');
    await search.fill('macbook');


    await page.waitForTimeout(5000);
    await browser.close();
});
