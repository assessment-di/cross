import { expect, test } from '@playwright/test'

test('page loads', async ({ page }) => {
  await page.goto('/')
  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Tax returns')
})
