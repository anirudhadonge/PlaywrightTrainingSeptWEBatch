import { Given, Then, When } from "@cucumber/cucumber";
import { chromium, expect, Page } from "@playwright/test";
import { LoginPage } from "../../PageModel/LoginPage";
import { HomePage } from "../../PageModel/HomePage";
import { CustomWorld } from "../../World/CustomWorld";

let page: Page;
let loginPage: LoginPage;

/**
 * Given step: Navigate to the application under test.
 *
 * Behavior:
 * - Retrieves the Playwright `Page` instance stored in the `CustomWorld`.
 * - Instantiates the `LoginPage` Page Object using that page.
 * - Reads the application URL from the environment variable `URL` and validates it.
 * - Calls `loginPage.goto(url)` to navigate to the application.
 *
 * Parameters:
 * - this: CustomWorld - Cucumber world containing contextual values (expects a `Page` at key 'Page').
 *
 * Throws:
 * - Error when `process.env.URL` is not defined to prevent passing `undefined` to `goto`.
 */
Given("I Navigate to Application", async function (this: CustomWorld) {
  page = this.getValue('Page');
  loginPage = new LoginPage(page);

  const url = process.env.URL;
  if (!url) {
    throw new Error("Missing URL environment variable. Set URL or provide it before running the tests.");
  }
  // duplicate Given step removed (kept the validated version above)
  await loginPage.goto(url);
});
// ...existing code...

/**
 * When step: Log in to the application using credentials supplied by the feature
 * or falling back to environment variables.
 *
 * Behavior:
 * - Uses the username/password provided by the step arguments when present.
 * - Falls back to `process.env.USERNAME` and `process.env.PASSWORD` when step args are empty.
 * - Validates that both username and password are present before calling the Page Object.
 *
 * Parameters:
 * - userName: string - username provided by the feature step (may be empty string).
 * - password: string - password provided by the feature step (may be empty string).
 *
 * Throws:
 * - Error when neither step-provided credentials nor env vars are available.
 */
When("I login with {string} and {string}", async function (userName: string, password: string) {
  // prefer step-provided credentials, otherwise fall back to env vars
  const username = userName || process.env.USERNAME;
  const pwd = password || process.env.PASSWORD;

  if (!username || !pwd) {
    throw new Error("Missing username or password. Provide them in the feature or set USERNAME/PASSWORD env vars.");
  }

  await loginPage.loginToApplication(username, pwd);
});


