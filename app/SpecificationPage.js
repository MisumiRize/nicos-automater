import {By, until} from 'selenium-webdriver'


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
    await this._driver.wait(until.elementLocated({name: month, className: 'active'}), 10000)
    return new SpecificationPage(this._driver)
  }

  async getPrice() {
    const el = await this._driver.findElement(By.className('price'))
    const text = await el.getText()
    return parseInt(text.replace('円', '').replace(/,/g, ''))
  }

  async getSum() {
    const selector = By.css('.sum th:nth-child(2)')
    const present = await this._driver.isElementPresent(selector)
    if (present) {
      const el = await this._driver.findElement(selector)
      const text = await el.getText()
      return parseInt(text.replace('円', '').replace(/,/g, ''))
    }
    return 0
  }
}
