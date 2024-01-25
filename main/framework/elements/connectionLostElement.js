import { BaseElement } from './baseElement'


export class ConnectionLostElement extends (BaseElement) {
    #root = 'app-root app-connection-loss > div'

    get root() {
        return this.page.locator(this.#root)
    }
}
