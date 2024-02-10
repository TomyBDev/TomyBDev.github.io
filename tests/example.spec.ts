import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ThomasB/);
});

test('check social buttons', async ({ page }) => {
  await page.goto('/');

  let context = await page.context();

  // Start waiting for new page before clicking. Note no await.
const pagePromise = context.waitForEvent('page');
await page.getByRole('button', { name: 'LinkedIn' }).click();
const newPage = await pagePromise;
await newPage.waitForLoadState();
await expect(newPage).toHaveURL(/www.linkedin.com/);
});

test('game tile data loading', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByAltText('Evolution Cycle')).toBeVisible();
});
