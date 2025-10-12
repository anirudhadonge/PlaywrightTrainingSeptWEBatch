import {test,expect} from '@playwright/test'

test('This is my first test', async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.locator(".getStarted_Sjon").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText('Installation');
});