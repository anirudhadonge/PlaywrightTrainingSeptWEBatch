import {test,expect} from '@playwright/test'
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


test.only('Download File Example',async({page})=>{
    basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com");
    await basePage.click(basePage.getByLocator('[href="/download"]'));
    // const downloadEvent = page.waitForEvent('download');
    // await basePage.click(basePage.getByLocator('[href="download/20MB.bin"]'))
    // const download = await downloadEvent
    // await download.saveAs(process.cwd()+"/files/"+download.suggestedFilename())
    await basePage.download(basePage.getByLocator('[href="download/20MB.bin"]'),process.cwd()+"/files/");
})