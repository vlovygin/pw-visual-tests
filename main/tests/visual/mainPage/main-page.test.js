import { expect, test } from '@playwright/test'
import { MainPage } from '../../../framework/pages/mainPage'
import { lastNews } from '../../mock/lastNews'


test('[UI] main page har', async ({ page,  }) => {

    await page.routeFromHAR('./main/tests/visual/__hars__/mainPage/mainPage.har', {
        url: '**/backend/**',
        update: !!process.env.UPDATE_HAR
    })

    const mainPage = await new MainPage(page).loadPage()

    await expect(mainPage.root).toBeVisible()
    await expect(await mainPage.page).toHaveScreenshot({ fullPage: true })
})


test('[UI] Features ', async ({ page }) => {
    const mainPage = await new MainPage(page).loadPage()

    await expect(mainPage.features.root).toHaveScreenshot()
})

test.describe('News', () => {

    test('[UI] News with important news', async ({ page }) => {
        await page.route('**/backend/news/last*', async route => {
            const response = await route.fetch()
            const newLastNews = JSON.parse(JSON.stringify(lastNews))
            newLastNews.forEach((element, index) => {
                index === 0 ? newLastNews[index].isImportant = true : newLastNews[index].isImportant = false
            })
            await route.fulfill({ response, json: newLastNews })
        })

        const mainPage = await new MainPage(page).loadPage()

        await expect(mainPage.lastNews.root).toHaveScreenshot()
    })

    test('[UI] News no important news ', async ({ page }) => {
        await page.route('**/backend/news/last*', async route => {
            const response = await route.fetch()
            const newLastNews = JSON.parse(JSON.stringify(lastNews))
            newLastNews.forEach((element, index) => {
                if (element.isImportant === true) {
                    newLastNews[index].isImportant = false
                }
            })
            await route.fulfill({ response, json: newLastNews })
        })

        const mainPage = await new MainPage(page).loadPage()

        await expect(mainPage.lastNews.root).toHaveScreenshot()
    })
})
