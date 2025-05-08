import { expect, test } from '@playwright/test'
import { getKeyboardUtils } from './utils'

test('submit success', async ({ page }) => {
  const { tab, shiftTab, space, type } = getKeyboardUtils(page)

  await page.goto('/')

  await page.pause()

  // login
  await tab()
  await space()

  await page.waitForTimeout(1000)

  // start editing current form
  await tab(5)
  await space()

  // start editing first field
  await tab(3)
  await space()

  // change first field to 10000
  await tab(2)
  await type('10000')

  // save
  await tab(2)
  await space()

  // return back
  await shiftTab(4)

  // submit
  await space()

  // Expect to be submitted
  const resultText = await page.getByTestId('submit-success-test').innerText()
  expect(resultText).toBe('Tax return submitted!')
  await page.waitForTimeout(10000)
})
