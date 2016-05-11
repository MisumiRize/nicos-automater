import {By} from 'selenium-webdriver'

import CardsPage from './CardsPage'

export default class UserPage {
  constructor(driver) {
    this._driver = driver
  }

  async openCardsPage() {
    const menu = await this._driver.findElement(By.className('loginmenu'))
    const link = await menu.findElement(By.css('a'))
    const url = await link.getAttribute('href')
    await this._driver.get(url)
    return new CardsPage(this._driver)
  }
}
