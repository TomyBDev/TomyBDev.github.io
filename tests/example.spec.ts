import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ThomasB/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4000/cv');

  // Click the get started link.
  //await page.getByRole('link', { name: 'CV' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveTitle(/CV/);
});
