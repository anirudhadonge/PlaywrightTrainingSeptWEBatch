import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {
  userNameInput: string = '[data-qa="login-email"]';
  passwordInput: string = '[data-qa="login-password"]';
  signInBtn: string = '[data-qa="login-button"]';

  constructor(page: Page) {
    super(page);
  }

  async enterUserName(userName: string) {
    await this.fill(await this.getByLocator(this.userNameInput), userName);
  }

  async enterPassword(password: string) {
    await this.fill(await this.getByLocator(this.passwordInput), password);
  }

  async clickSignIn() {
    await this.click(await this.getByLocator(this.signInBtn));
  }

  async loginToApplication(userName: string, password: string) {
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}
