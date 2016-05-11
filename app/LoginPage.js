import {By} from 'selenium-webdriver'

import UserPage from './UserPage'


export default class LoginPage {
  constructor(driver) {
    this._driver = driver
  }

  async login() {
    await this._driver.get('https://www2.cr.mufg.jp/newsplus/?cardBrand=0013&lid=news_nicos')
    const id = await this._driver.findElement(By.name('webId'))
    await id.sendKeys(process.env.MUFG_ID)
    const password = await this._driver.findElement(By.name('webPassword'))
    await password.sendKeys(process.env.MUFG_PASSWORD)
    const submit = await this._driver.findElement(By.name('submit1'))
    await submit.click()
    await this._driver.wait(() => {
      return this._driver.isElementPresent(By.name('submit'))
    })
    const auth = await this._driver.findElement(By.id('addAuthSelect2'))
    await auth.click()
    const birthday = await this._driver.findElement(By.name('webBirthDay'))
    await birthday.sendKeys(process.env.BIRTHDAY)
    const login = await this._driver.findElement(By.name('submit'))
    await login.click()
    return new UserPage(this._driver)
  }
}
