import {test} from "./../Fixture/Fixture";
import addToCard from './../TestData/AddToCard.json'


test('Login to Application test',async({homePage,loginPage})=>{
    console.log(addToCard);
    await loginPage.goto(process.env.URL)
    await loginPage.loginToApplication(process.env.USERNAME,process.env.PASSWORD);
    await homePage.NavigatedToHomePage();
    await homePage.addToCart(addToCard.productName);
    await homePage.validateDialogText(addToCard.DialogText);
})