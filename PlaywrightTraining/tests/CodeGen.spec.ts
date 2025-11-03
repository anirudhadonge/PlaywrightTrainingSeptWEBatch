import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await page.locator('#dropdown').selectOption('2');
  await page.locator('html').click();
  await page.locator('html').click();
  await expect(page.locator('#dropdown')).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dropdown List');
  await expect(page.locator('#dropdown')).toHaveValue('2');
});