import { BaseElement } from './baseElement'


export class FooterElement extends (BaseElement) {
    #root = 'app-root app-footer'

    get root() {
        return this.page.locator(this.#root)
    }
}
