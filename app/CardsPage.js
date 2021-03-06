import {By, until} from 'selenium-webdriver'

import SpecificationPage from './SpecificationPage'


export default class CardsPage {
  constructor(driver) {
    this._driver = driver
  }

  async openSpecificationPage() {
    const card = await this._driver.findElement(By.className('user-info-card'))
    const link = await card.findElement(By.css('a'))
    await link.click()
    await this._driver.wait(until.elementLocated(By.className('tab-nav-meisai')))
    return new SpecificationPage(this._driver)
  }
}
