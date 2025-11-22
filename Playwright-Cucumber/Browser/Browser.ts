import { chromium, firefox, Page } from "playwright";

let browser;
let context;
export default async function GetPageObject(
  browserName: string
): Promise<Page> {
  switch (browserName.toLowerCase()) {
    case "chromium":
      browser = await chromium.launch({
        headless: false,
      });
      context = await browser.newContext({
        viewport: null,
      });
      return await context.newPage();
      default : 
        browser = await firefox.launch({
        headless: false,
      });
      context = await browser.newContext({
        viewport: null,
      });
      return await context.newPage();
  }
}
