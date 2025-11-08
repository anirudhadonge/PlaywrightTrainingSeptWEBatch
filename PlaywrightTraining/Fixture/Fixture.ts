import {test as baseTest, BrowserContext } from '@playwright/test'
import { BasePage } from '../PageModel/BasePage'
import { HomePage } from '../PageModel/HomePage'
import { ProductPage } from '../PageModel/ProductPage'
import { CartPage } from '../PageModel/CartPage'
import { LoginPage } from '../PageModel/LoginPage'




export const test = baseTest.extend<{basePage:BasePage,homePage:HomePage,productPage:ProductPage,cartPage:CartPage,loginPage:LoginPage}>({
    
    basePage: async({page},use)=>{
        let basePage = new BasePage(page)
        use(basePage)
    },
    homePage: async({page},use)=>{
        use(new HomePage(page));
    },

    productPage: async({page},use)=>{
        use(new ProductPage(page));
    },

    cartPage: async({page},use)=>{
        use(new CartPage(page));
    },

    loginPage: async({page},use)=>{
        use(new LoginPage(page));
    }
   
})