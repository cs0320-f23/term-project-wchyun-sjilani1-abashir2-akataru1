import { test, expect } from "@playwright/test";

test('Initial render shows login prompt', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('text=Please sign in with your ".brown.edu" email')).toBeVisible();
  });

test("on page load, i see a button", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page.getByLabel("Submit")).toBeVisible();
  });

  test('Loading spinner is shown after button click', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    await page.click("Submit");
  
    await expect(page.locator('TailSpin')).toBeVisible();
  
    await page.waitForSelector("TailSpin", { state: 'hidden' });
  });

  test('Menu items are displayed after login', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    // Simulate or mock login
    // Check for menu items
    await expect(page.locator('Set Menu')).toBeVisible();
  });