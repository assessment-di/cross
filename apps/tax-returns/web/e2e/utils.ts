import { Page } from '@playwright/test'

async function pressKeyTimes(page: Page, key: string, times: number) {
  for (let i = 0; i < times; i++) {
    await page.keyboard.press(key)
  }
}

async function pressShiftTabTimes(page: Page, times: number) {
  for (let i = 0; i < times; i++) {
    await page.keyboard.down('Shift')
    await page.keyboard.press('Tab')
    await page.keyboard.up('Shift')
  }
}

export function getKeyboardUtils(page: Page) {
  const tab = async (n = 1) => await pressKeyTimes(page, 'Tab', n)
  const shiftTab = async (n = 1) => await pressShiftTabTimes(page, n)
  const space = async () => await page.keyboard.press('Space')
  const type = async (text: string) => await page.keyboard.type(text)
  return {
    tab,
    shiftTab,
    space,
    type,
  }
}
