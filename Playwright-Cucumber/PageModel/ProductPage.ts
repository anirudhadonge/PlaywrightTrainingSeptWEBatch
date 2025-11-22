import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";


export class ProductPage extends CommonPage{
    constructor(page:Page){
        super(page);
    }
}