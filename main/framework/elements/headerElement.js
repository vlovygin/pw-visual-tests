import { BaseElement } from './baseElement'


export class HeaderElement extends (BaseElement) {
    #root = 'app-root app-header'

    get root() {
        return this.page.locator(this.#root)
    }
}
