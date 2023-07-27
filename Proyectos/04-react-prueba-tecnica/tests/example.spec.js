// @ts-check
import { test, expect } from '@playwright/test'

const LocalHostUrl = 'http://localhost:5173/'
const catPrefixImage = 'https://cataas.com'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LocalHostUrl)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(catPrefixImage)).toBeTruthy()
})
