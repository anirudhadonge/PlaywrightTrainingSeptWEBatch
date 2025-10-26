import {test} from '@playwright/test'
import { BasePage } from '../PageModel/BasePage';
/**
 * 
 * getByrole()
 * getByLabel()
 * getByPlaceHolder()
 * getByText()
 * getByAltText() : attribute name Alt=""
 * getByTitle() :  attribute called as Title
 * getTestID()
 * Locator() : xpath, css 
 */

test('Element by Role',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/checkboxes"]').click();
    await page.getByRole('checkbox').nth(0).click();
})

test('Element by Label',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    let basePage = new BasePage(page);
    await basePage.getByLabel('Username').fill('TomSmith');
    //await page.getByLabel('Username').fill('TomSmith')
})

test("Element by PlaceHolder",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByPlaceholder("Enter your company").nth(0).fill("Testview");
})

test("Element by Text",async({page})=>{
    await page.goto("https://playwright.dev/");
    //await page.getByText("Get started").click()
    await page.getByAltText("VS Code").click();
    
})

test("Element by Title",async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.getByTitle("system mode").click();
    //await page.getByTestId()
})


