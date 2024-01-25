import { HeaderElement } from '../elements/headerElement'
import { ConnectionLostElement } from '../elements/connectionLostElement'
import { CookieElement } from '../elements/cookieElement'
import { FooterElement } from '../elements/footerElement'


export class BasePage {
    constructor(page) {
        this.page = page
        this.header = new HeaderElement(page)
        this.footer = new FooterElement(page)
        this.cookie = new CookieElement(page)
        this.connectionLost = new ConnectionLostElement(page)
    }
}
