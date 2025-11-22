import {
  BeforeAll,
  Before,
  BeforeStep,
  AfterStep,
  After,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { chromium, Page } from "playwright";
import { CustomWorld } from "../World/CustomWorld";
import setupEnv from "../Dotenv/SetupEnvironment";
import GetPageObject from "../Browser/Browser";

let page: Page;
BeforeAll(() => {
  setDefaultTimeout(180000);
  setupEnv();
  console.log("This a before All method called");
});

AfterAll(() => {
  console.log("After all method");
});

Before(async function (this: CustomWorld, { pickle }) {
  let page = await GetPageObject(process.env.BROWSER || "");
  page.setDefaultTimeout(30000);
  console.log(`${pickle.name}`);
  this.setValue("Page", page);
});

After(async function (this: CustomWorld) {
  console.log("This is after scenario");
  let page = this.getValue("Page");
  await page.close();
});

BeforeStep(async function (this: CustomWorld, { pickleStep }) {
  console.log(`---${pickleStep.text}----`);
});

AfterStep(async function (this: CustomWorld) {
  console.log("After step");
});
