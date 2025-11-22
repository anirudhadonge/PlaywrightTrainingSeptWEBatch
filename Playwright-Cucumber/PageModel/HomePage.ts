import { expect, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";


export class HomePage extends CommonPage{
    brandName:string= ".brands-name";

    brandNameList:string =".brands-name ul li"

    dialogText = ".modal-dialog.modal-confirm .text-center";

    constructor(page:Page){
        super(page);
    }

    async NavigatedToHomePage(){
        await this.ValidateElementIsVisible(await this.getByLocator(this.brandName));
    }

    async selectBrandName(brandName:string){
        await this.click(this.getByLocator(`//div[@class='brands-name']//a[text()='${brandName}']`))
    }

    async getBrandCound(brandName:string){
        let count = await this.textContent(this.getByLocator(`//div[@class='brands-name']//a[text()='${brandName}']`))
        return count;
    }

    async addToCart(productName:string){
        let locator =`//div[@class="features_items"]//div[@class="single-products"]//div[@class="productinfo text-center"]//p[text()='${productName}']//following-sibling::a[@class="btn btn-default add-to-cart"]`
        await this.click(this.getByLocator(locator));
    }

    async validateDialogText(text:string){
        await expect(this.getByLocator(this.dialogText)).toHaveText(text);
    }
}