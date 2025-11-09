import { BasePage } from '../PageModel/BasePage'
import {test} from './../Fixture/Fixture'


test('Custom fixture example',async({basePage})=>{
    await basePage.goto("https://the-internet.herokuapp.com/login");
    await basePage.pressSequentially(basePage.getByLabel("Username"),'tomsmith',500);
    // await basePage.getByLabel("Username").pressSequentially('tomsmith',{
    //     delay:500
    // });
    await basePage.fill(basePage.getByLabel("Password"),'SuperSecretPassword!')
    // await basePage.getByLabel("Password").fill('SuperSecretPassword!');
    await basePage.click(basePage.getByLocator('.radius'))
})


test.only('Browser context test',async({context})=>{
    let page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("Username").pressSequentially('tomsmith');
})