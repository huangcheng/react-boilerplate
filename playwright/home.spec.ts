import { test, expect } from '@playwright/test';

test('has title', async ({ page }): Promise<void> => {
  await page.goto('/');

  const h1 = page.locator('h1');

  await expect(h1).toHaveText(/Home/);
});
