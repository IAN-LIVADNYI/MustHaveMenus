// @ts-check
const { test, expect,chromium } = require('@playwright/test');

test('has title', async ({ page }) => {
  await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit
  await page.goto('https://playwright.dev/');
  // await page.pause();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await chromium.launch({ headless: false, slowMo: 1000 }); // or firefox, webkit
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
