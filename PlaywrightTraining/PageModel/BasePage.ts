import { BrowserContext, expect, FrameLocator, Locator, Page } from "@playwright/test";

export class BasePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    console.log("Navigating to " + url);
    await this.page.goto(url);
  }
  getByLabel(label: string): Locator {
    console.log("Creating a locator with Lable " + label);
    return this.page.getByLabel(label);
  }

  getByRole(
    role:
      | "alert"
      | "alertdialog"
      | "application"
      | "article"
      | "banner"
      | "blockquote"
      | "button"
      | "caption"
      | "cell"
      | "checkbox"
      | "code"
      | "columnheader"
      | "combobox"
      | "complementary"
      | "contentinfo"
      | "definition"
      | "deletion"
      | "dialog"
      | "directory"
      | "document"
      | "emphasis"
      | "feed"
      | "figure"
      | "form"
      | "generic"
      | "grid"
      | "gridcell"
      | "group"
      | "heading"
      | "img"
      | "insertion"
      | "link"
      | "list"
      | "listbox"
      | "listitem"
      | "log"
      | "main"
      | "marquee"
      | "math"
      | "meter"
      | "menu"
      | "menubar"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "navigation"
      | "none"
      | "note"
      | "option"
      | "paragraph"
      | "presentation"
      | "progressbar"
      | "radio"
      | "radiogroup"
      | "region"
      | "row"
      | "rowgroup"
      | "rowheader"
      | "scrollbar"
      | "search"
      | "searchbox"
      | "separator"
      | "slider"
      | "spinbutton"
      | "status"
      | "strong"
      | "subscript"
      | "superscript"
      | "switch"
      | "tab"
      | "table"
      | "tablist"
      | "tabpanel"
      | "term"
      | "textbox"
      | "time"
      | "timer"
      | "toolbar"
      | "tooltip"
      | "tree"
      | "treegrid"
      | "treeitem"
  ): Locator {
    console.log("Creating a locator with Role " + role);
    return this.page.getByRole(role);
  }

  getByLocator(locator: string, index = 0,frameLocator?:FrameLocator): Locator {
    console.log("Creating a locator using " + locator);
    if(frameLocator==undefined){
    return this.page.locator(locator).nth(index);
    }else{
        console.log("Create locator using frame "+ frameLocator + "locator string" + locator)
        return frameLocator.locator(locator).nth(index);
    }
  }

  async click(locator: Locator): Promise<void> {
    console.log("Clicking on " + locator);
    await locator.click();
  }

  async fill(locator: Locator, input: string): Promise<void> {
    console.log("Filling the input by " + input);
    await locator.fill(input);
  }

  async pressSequentially(
    locator: Locator,
    input: string,
    delayTime: number = 0
  ): Promise<void> {
    console.log("Press Sequentially the input by " + input);
    await locator.pressSequentially(input, { delay: delayTime });
  }

  async selectOption(
    locator: Locator,
    options: { value?: string; label?: string; index?: number }
  ) {
    console.log("Select option using " + options);
    await locator.selectOption(options);
  }

  async check(locator: Locator) {
    console.log("Check the " + locator);
    await locator.check();
  }

  async unCheck(locator: Locator) {
    console.log("uncheck the " + locator);
    await locator.uncheck();
  }

  async uploadFileForInputElement(locator: Locator, filePath: string) {
    console.log("Upload the file from path " + filePath);
    await locator.setInputFiles(filePath);
  }

  async uploadFile(locator:Locator, filePath:string) {
    const fileChooserEvent = this.page.waitForEvent("filechooser");
    await this.click(locator);
    const fileChooser = await fileChooserEvent;
    await fileChooser.setFiles(filePath);
  }

  frameLocator(locator:string,frameLocator?:FrameLocator):FrameLocator{
    if(frameLocator==undefined){
    return this.page.frameLocator(locator);
    }else{
        return frameLocator.frameLocator(locator);
    }
  }

  async download(locator:Locator, filePath:string){
    const downloadEvent = this.page.waitForEvent('download');
    await this.click(locator)
    const download = await downloadEvent
    await download.saveAs(filePath+download.suggestedFilename())
  }

  async acceptAlert(locator:string,message?:string){
    this.page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await this.page.waitForTimeout(5000);
        await dialog.accept(message)
    })
    await this.click(this.getByLocator(locator));
  }

  async clickForNewPage(locator:string, context:BrowserContext):Promise<Page>{
    const newPagePromise = context.waitForEvent('page');
    await this.click(this.getByLocator('[href="/windows/new"]'));
    return await newPagePromise;
  }

  async textContent(locator:Locator):Promise<string|null>{
    return await locator.textContent();
  }

  async ValidateElementIsVisible(locator:Locator){
    await expect(locator).toBeVisible();
  }
}
