import {test,expect, chromium, firefox} from '@playwright/test'
import { BasePage } from '../PageModel/BasePage'

/**
 * Fill / Presssequentially
 * Fill: Following html tag are present
 * input, textarea 
 * copy paste
 * 
 * presssequentially
 * any tag.
 * Typing each key one by one
 */
   let basePage:BasePage
test("This is a method for demoing click action",async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://playwright.dev/");
    await basePage.getByLocator(".getStarted_Sjon").click();
})


test(" Fill and Press-sequentially example",async ({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com/login");
    await basePage.pressSequentially(basePage.getByLabel("Username"),'tomsmith',500);
    // await basePage.getByLabel("Username").pressSequentially('tomsmith',{
    //     delay:500
    // });
    await basePage.fill(basePage.getByLabel("Password"),'SuperSecretPassword!')
    // await basePage.getByLabel("Password").fill('SuperSecretPassword!');
    await basePage.click(basePage.getByLocator('.radius'))
})

/**
 * Selecting using the following criteria
 * using value attribute
 * using the Label
 * using the index
 */
test('selecting Option test',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/dropdown"]'));
    await basePage.selectOption(basePage.getByLocator('select#dropdown'),{value:"2"})
    // await page.locator("select#dropdown").selectOption({value:"2"});
    // await page.locator("select#dropdown").selectOption({label:'Option 1'});
    // await page.locator("select#dropdown").selectOption({index:0});

    console.log(await page.locator("select#dropdown option").allTextContents());
})

/**
 * check: it checks the state of the element then perform the check action
 * uncheck : it checks the state of the element then perform the unheck action
 */
test('CheckBox example',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/checkboxes"]'));
    await basePage.check(basePage.getByLocator("#checkboxes input"));
    //await page.locator("#checkboxes input").nth(0).check();
    // if(!await page.locator("#checkboxes input").nth(0).isChecked()){
    //     await page.locator("#checkboxes input").nth(0).click();
    // }
    //await page.locator("#checkboxes input").nth(0).uncheck();
    await basePage.unCheck(basePage.getByLocator("#checkboxes input"));
})

test('Upload file Example', async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/upload"]'));
    await basePage.uploadFileForInputElement(basePage.getByLocator("#file-upload"),process.cwd()+"/files/"+"upload_file.xlsx")
    //await page.locator('#file-upload').setInputFiles([process.cwd()+"/files/"+"upload_file.xlsx"])
})

test('Upload file from a non input filechooser', async ({page})=>{
 basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/upload"]'));
    await basePage.uploadFile(basePage.getByLocator("#file-upload"),process.cwd()+"/files/"+"upload_file.xlsx");
    // const fsg = page.waitForEvent('filechooser');
    // await basePage.click(basePage.getByLocator("#file-upload"))
    // const fileChooser = await fsg;
    // await fileChooser.setFiles(process.cwd()+"/files/"+"upload_file.xlsx");
})

/**
 * We need to get the control of the frame and using the control we will perform all the web action inside the iframe.
 */
test("Single Iframe example",async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/frames"]'));
    await basePage.click(basePage.getByLocator('[href="/iframe"]'));
    let frame = basePage.frameLocator("#mce_0_ifr");
    await expect(basePage.getByLocator("#tinymce p",0,frame)).toBeVisible();
})

test("Nested frame example",async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/frames"]'));
    await basePage.click(basePage.getByLocator('[href="/nested_frames"]'));
    const topFrame = basePage.frameLocator('[src="/frame_top"]');
    const leftFrame = basePage.frameLocator('[src="/frame_left"]',topFrame);
    await expect(leftFrame.locator('body')).toContainText("LEFT");
})


test('Download File Example',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/download"]'));
    // const downloadEvent = page.waitForEvent('download');
    // await basePage.click(basePage.getByLocator('[href="download/20MB.bin"]'))
    // const download = await downloadEvent
    // await download.saveAs(process.cwd()+"/files/"+download.suggestedFilename())
    await basePage.download(basePage.getByLocator('[href="download/20MB.bin"]'),process.cwd()+"/files/");
})

test('Handling Alerts',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/javascript_alerts"]'));
    await basePage.AcceptAlert('[onclick="jsAlert()"]')
    await expect(basePage.getByLocator("#result")).toHaveText('You successfully clicked an alert');
})

test('Confirmation Alerts',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/javascript_alerts"]'));
    // page.on('dialog',async(dialog)=>{
    //     console.log(dialog.message());
    //     await dialog.accept()
    // })
    // await basePage.click(basePage.getByLocator('[onclick="jsConfirm()"]'));
    // await expect(basePage.getByLocator("#result")).toHaveText('You clicked: Ok');
        page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await dialog.dismiss();
    })
    await basePage.click(basePage.getByLocator('[onclick="jsConfirm()"]'));
    await expect(basePage.getByLocator("#result")).toHaveText('You clicked: Cancel');
})

test('prompt Alerts',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/javascript_alerts"]'));
    await basePage.acceptAlert('[onclick="jsPrompt()"]',"This is a demo text")
    await expect(basePage.getByLocator("#result")).toHaveText('You entered: This is a demo text');
})

test('Hover test',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/hovers"]'));
    await expect(basePage.getByLocator('[href="/users/1"]')).toBeHidden();
    await basePage.getByLocator('[alt="User Avatar"]',0).hover();
    await expect(basePage.getByLocator('[href="/users/1"]')).toBeVisible();
})

test('MultiWindow test',async()=>{
    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext();
    let page = await context.newPage();
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/windows"]'));
    const newPage  = await basePage.clickForNewPage('[href="/windows/new"]',context);
    // const newPagePromise = context.waitForEvent('page');
    // await basePage.click(basePage.getByLocator('[href="/windows/new"]'));
    // const newPage = await newPagePromise;
    await expect(newPage.locator('.example h3')).toHaveText('New Window');
    console.log(await page.locator('.example h3').allTextContents())
    await expect(page.locator('.example h3')).toHaveText('Opening a new window');
})

test('Windows Authecation popup test', async()=>{
    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        },
    });
    let page = await context.newPage();
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/digest_auth"]'));
    await expect(basePage.getByLocator(".example p")).toContainText('Congratulations! You must have the proper credentials.');
})

test.only('Drag drop', async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await expect(basePage.page).toHaveTitle('The Internet'); // Page level assertion
    await basePage.click(basePage.getByLocator('[href="/drag_and_drop"]'));
    await basePage.page.waitForTimeout(5000);
    await expect.soft(basePage.getByLocator("#column-a")).toHaveText('B'); // Locator level assertions
    await page.locator("#column-a").dragTo(basePage.getByLocator("#column-b"));
    await basePage.page.waitForTimeout(5000);
    basePage.getByLocator("#column-a").waitFor({state:'visible',timeout:5000});
    await expect(basePage.getByLocator("#column-a")).toHaveText('B'); // Locator level assertions
    await page.screenshot()
    expect(10).toBe(10)
})

/**
 * waitforLoadState() : wait on the Page. Wait for a condition on the Page level
 *  load: wait for all the Event of the page to get loaded.
 *  domContentLoaded: Dom Object and the content of the page.
 *  networkIdle:
 * waitForTimeOut() : Equvalent to Thread.Sleep in Java
 * waitFor() : This is application or i would say is applied on the Locator
 */

/**
 * Assertions
 * Page Assertions: Assertions applied on the page.
 * Locator Assertions: You would apply assertion on the locator.
 * Assertion for comparing values : values are equal , condition is true.
 * 
 */