import { BaseElement } from './baseElement'


export class CookieElement extends (BaseElement) {
    #root = 'app-root app-common-msg'
    #accept = 'app-cookie-disclaimer button.btn-accept'

    get root() {
        return this.page.locator(this.#root)
    }

    async accept() {
        await this.page.locator(this.#accept).click()
        return this
    }
}
