import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CommonPage extends BasePage{

    productLocator = '[href="/products"]'
    homeLocator = '[href="/"]';
    cartLocator = '[href="/view_cart"]'

    constructor(page:Page){
        super(page);
    }

    async clickHomeLink(){
        await this.click(this.getByLocator(this.homeLocator));
    }

    async clickProductLink(){
        await this.click(this.getByLocator(this.productLocator));
    }

    async clickCartLink(){
        await this.click(this.getByLocator(this.cartLocator));
    }
}
