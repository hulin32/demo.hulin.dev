import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the demo text', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Demo')).toBeVisible();
  });

  test('should navigate to foo page when clicking the link', async ({ page }) => {
    await page.goto('/');
    await page.getByText('FooLink').click();
    await expect(page).toHaveURL('/foo');
  });
}); 