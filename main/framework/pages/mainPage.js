import { BasePage } from './basePage'


export class MainPage extends BasePage {
    #root = 'app-root'

    get root() {
        return this.page.locator(this.#root)
    }

    get features() {
        return new Features(this.page)
    }

    get lastNews() {
        return new LastNews(this.page)
    }

    async loadPage() {
        await this.page.goto('/')
        return this
    }

}


class Features extends BasePage {
    #root = 'app-home app-features'

    get root() {
        return this.page.locator(this.#root)
    }
}


class LastNews extends BasePage {
    #root = 'app-home app-last-news'

    get root() {
        return this.page.locator(this.#root)
    }
}
