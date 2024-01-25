import { expect, test } from '@playwright/test'
import { MainPage } from '../../framework/pages/mainPage'


test.use({ storageState: { cookies: [], origins: [] } })

test('[UI] Cookie', async ({ page }) => {

    // await page.addInitScript(p => {window.localStorage.removeItem('cookie-accepted')})


    const mainPage = await new MainPage(page).loadPage()

    await expect(mainPage.cookie.root).toHaveScreenshot()
})
