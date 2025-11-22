import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";


export class CartPage extends CommonPage{
    constructor(page:Page){
        super(page);
    }
}