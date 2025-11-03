/**
 * test.describe
 * test.step
 * beforeAll
 * beforeEach
 * AfterAll
 * AfterEach
 * test.slow
 * test.only
 * test.skip
 * test.fail()
 */

import test, { expect, Page } from "@playwright/test";
import { BasePage } from "../PageModel/BasePage";

let basePage:BasePage;
let pageObj:Page;
test.beforeAll('Before all block',async()=>{
  console.log("Before All block") ;
})

test.afterAll("After all Block",async()=>{
    console.log("After All block") ;
})

test.beforeEach('Before each method',async({page})=>{
    console.log("Before Each Block getting executed.");
    basePage = new BasePage(page);
     await test.step('Navigating to the url',async()=>{
        await basePage.goto("/");
    })
    
    pageObj = page;
})

test.afterEach('This is after each method',async()=>{
    console.log("Closing the page object.");
    await pageObj.close();
})

test.only('selecting Option test',{
    tag:"@smoke"
},
    async()=>{
    await test.step("Click on Drop down link",async()=>{
        await basePage.click(basePage.getByLocator('[href="/dropdown"]'));
    })
    
    await test.step('select the drop down with value 2',async()=>{
        await basePage.selectOption(basePage.getByLocator('select#dropdown'),{value:"2"})
})
    
    // await page.locator("select#dropdown").selectOption({value:"2"});
    // await page.locator("select#dropdown").selectOption({label:'Option 1'});
    // await page.locator("select#dropdown").selectOption({index:0});
    await test.step('Validate the text content',async()=>{
        console.log(await pageObj.locator("select#dropdown option").allTextContents());
    })
    
    /**
     *   await test.step("failed validation",async()=>{
        expect(2).toBe(3);
    })
     */
  
})

/**
 * check: it checks the state of the element then perform the check action
 * uncheck : it checks the state of the element then perform the unheck action
 */
test('@smoke CheckBox example',async({page})=>{
    await basePage.click(basePage.getByLocator('[href="/checkboxes"]'));
    await basePage.check(basePage.getByLocator("#checkboxes input"));
    //await page.locator("#checkboxes input").nth(0).check();
    // if(!await page.locator("#checkboxes input").nth(0).isChecked()){
    //     await page.locator("#checkboxes input").nth(0).click();
    // }
    //await page.locator("#checkboxes input").nth(0).uncheck();
    await basePage.unCheck(basePage.getByLocator("#checkboxes input"));
})