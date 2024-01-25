import { expect, test } from '@playwright/test'
import { MainPage } from '../../framework/pages/mainPage'


test('[UI] Connection lost screen', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'This feature is not implemented for Firefox')

    const mainPage = await new MainPage(page).loadPage()
    await (await page.context()).setOffline(true)

    await expect(mainPage.connectionLost.root).toHaveScreenshot()
})
