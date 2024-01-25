import { expect, test } from '@playwright/test'
import { MainPage } from '../../framework/pages/mainPage'
import { settings } from '../mock/settings'


test('[UI] Footer', async ({ page }) => {
    await page.route('**/backend/settings/help', async route => {
        const response = await route.fetch()
        await route.fulfill({ response, json: settings })
    })

    const mainPage = await new MainPage(page).loadPage()

    await expect(mainPage.footer.root).toHaveScreenshot()
})
