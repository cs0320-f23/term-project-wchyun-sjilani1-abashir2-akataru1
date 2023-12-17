import {test, expect, defineConfig} from '@playwright/test';

export default defineConfig({
  expect: {
    timeout: 20 * 1000,
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/?skipLogin=true");
});

// test('Initial render shows login prompt', async ({ page }) => {
//     await page.goto('http://localhost:3000/');
//     await expect(page.locator('text=Please sign in with your ".brown.edu" email')).toBeVisible();
//   });

test("on page load, i see a button", async ({ page }) => {
    // await page.goto("http://localhost:3000/?skipLogin=true");
    // await page.getByLabel("Submit");
    await expect(page.getByLabel("Submit")).toBeVisible();
  });

  test('Dropdown Menus Work + Submit', async ({ page }) => {
    await page.getByLabel("select-day").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-day")).toContainText("Tuesday");

    await page.getByLabel("select-dhall").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-dhall")).toContainText("Blue Room");

    await page.getByLabel("select-meal").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-meal")).toContainText("Breakfast");
  
    await page.getByLabel("Submit").click();
  
    await expect(page.getByLabel('Spinner')).toBeVisible();
  
  });

  test('Integration: Blue Room Menu - Tuesday/Blue Room/Breakfast', async ({ page }) => {
    await page.getByLabel("select-day").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-day")).toContainText("Tuesday");

    await page.getByLabel("select-dhall").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-dhall")).toContainText("Blue Room");

    await page.getByLabel("select-meal").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-meal")).toContainText("Breakfast");
  
    await page.getByLabel("Submit", { exact: true }).click();

    //Integration: Requires backend to work. Checking if backend scraper is working + sending info to frontend correctly (all text is present)
    await expect(page.getByLabel("Menu Card").first()).toBeVisible({timeout: 15 * 1000});
    await expect(page.getByLabel("Menu Card").first()).toContainText("Bagel Bar");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Dietary Restrictions: N/A");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Description: assorted bagels, house made cream cheese spreads");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Rating:");

    //Sees if see reviews button exists
    await expect(page.getByLabel("Menu Card").first().getByLabel('See Reviews')).toContainText('See Reviews');

    await page.getByLabel("Menu Card").first().getByLabel('See Reviews').click();

    //Integration: Fetches the review information from the database
    await expect(page.getByLabel("Menu Card").first().getByLabel('Review Card').first()).toContainText('Anushka Kataruka');
    await expect(page.getByLabel("Menu Card").first().getByLabel('Review Card').first()).toContainText('5.0');
    await expect(page.getByLabel("Menu Card").first().getByLabel('Review Card').first()).toContainText('time');
    await expect(page.getByLabel("Menu Card").first().getByLabel('Review Card').first()).toContainText('bad');

    //Do all of the same checks for bagel bar for the 2nd item: Breakfast Sandwich

    await expect(page.getByLabel("Menu Card").nth(1)).toBeVisible();
    await expect(page.getByLabel("Menu Card").nth(1)).toContainText("Breakfast Sandwich");
    await expect(page.getByLabel("Menu Card").nth(1)).toContainText("Dietary Restrictions: N/A");
    await expect(page.getByLabel("Menu Card").nth(1)).toContainText("Description: local cage free eggs, assorted meats, cheeses & breads. Try one of our signature sandwiches, or create your own!");
    await expect(page.getByLabel("Menu Card").nth(1)).toContainText("Rating:");

    //Sees if see reviews button exists
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('See Reviews')).toContainText('See Reviews');

    await page.getByLabel("Menu Card").nth(1).getByLabel('See Reviews').click();

    //Integration: Fetches the review information from the database
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').first()).toContainText('Example Person');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').first()).toContainText('5.0');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').first()).toContainText('11-16-2023');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').first()).toContainText('THIS WAS SO FIRE');

    //Check if add a review button is visible
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Add a Review')).toBeVisible();

    //We add a review
    await page.getByLabel("Menu Card").nth(1).getByLabel('Add a Review').click();
    await page.getByLabel("Menu Card").nth(1).getByLabel('star-rating-1').click();
    await page.getByLabel("Menu Card").nth(1).getByLabel('Add your review').fill('Garbage sandwich tbh');
    await page.getByLabel("Menu Card").nth(1).getByLabel('review submit').click();
    
    await page.getByLabel("Menu Card").nth(1).getByLabel('Add a Review').click();
    await page.getByLabel("Menu Card").nth(1).getByLabel('Add a Review').click();

    //Check if review was successfully added and displayed
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('Example Person');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('1.0');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('Garbage sandwich tbh');

    //Reload to see if it added on backend
    await page.getByLabel("Submit", { exact: true }).click();

    //Check if we still get the new review from the backend after reloading front end page
    await page.getByLabel("Menu Card").nth(1).getByLabel('See Reviews').click();
    await page.getByLabel("Menu Card").nth(1).getByLabel('Add a Review').click();
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('Example Person');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('1.0');
    await expect(page.getByLabel("Menu Card").nth(1).getByLabel('Review Card').last()).toContainText('Garbage sandwich tbh');
  });


  test('Integration: Ivy Room Menu - Tuesday/Ivy Room/Dinner', async ({ page }) => {
    // test.slow();

    await page.getByLabel("select-day").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-day")).toContainText("Tuesday");

    await page.getByLabel("select-dhall").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-dhall")).toContainText("Ivy Room");

    await page.getByLabel("select-meal").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.getByLabel("select-meal")).toContainText("Dinner");
  
    await page.getByLabel("Submit", { exact: true }).click();    

    //Integration: Requires backend to work. Checking if backend scraper is working + sending info to frontend correctly (all text is present)
    await expect(page.getByLabel("Menu Card").first()).toBeVisible({timeout: 15 * 1000});
    await expect(page.getByLabel("Menu Card").first()).toContainText("Smoothie Station");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Dietary Restrictions: Vegetarian, Made without Gluten-Containing Ingredients");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Description: customize your smoothie:");
    await expect(page.getByLabel("Menu Card").first()).toContainText("Rating:");

  });



  // test('Menu items are displayed after login', async ({ page }) => {
  //   // await page.goto('http://localhost:3000/');
  //   // Simulate or mock login
  //   // Check for menu items
  //   await expect(page.locator('Set Menu')).toBeVisible();
  // });