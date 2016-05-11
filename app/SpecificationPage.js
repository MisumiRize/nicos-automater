import {By} from 'selenium-webdriver'


export const NEXT_MONTH = 'oNEXT_MONTH'
export const THE_MONTH_AFTER = 'oTHE_MONTH_AFTER'


export default class SpecificationPage {
  constructor(driver) {
    this._driver = driver
  }

  async openMonthSpecificationPage(month) {
    const nav = await this._driver.findElement(By.className('tab-nav-meisai'))
    const specification = await this._driver.findElement(By.name(month))
    await specification.click()
    return new SpecificationPage(this._driver)
  }

  async getPrice() {
    const el = await this._driver.findElement(By.className('price'))
    const text = await el.getText()
    return parseInt(text.replace('円', '').replace(/,/g, ''))
  }

  async getSum() {
    const el = await this._driver.findElement(By.css('.sum th:nth-child(2)'))
    const text = await el.getText()
    return parseInt(text.replace('円', '').replace(/,/g, ''))
  }
}
