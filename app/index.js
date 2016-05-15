import dotenv from 'dotenv'
import {Builder} from 'selenium-webdriver'

import LoginPage from './LoginPage'
import {post} from './Mackerel'
import {NEXT_MONTH, THE_MONTH_AFTER} from './SpecificationPage'

dotenv.config()


export default async function app() {
  const driver = new Builder().forBrowser('firefox').build()
  let p = await new LoginPage(driver).login()
  p = await p.openCardsPage()
  p = await p.openSpecificationPage()
  const thisMonth = await p.getPrice()
  p = await p.openMonthSpecificationPage(NEXT_MONTH)
  const nextMonth = await p.getPrice()
  p = await p.openMonthSpecificationPage(THE_MONTH_AFTER)
  const theMonthAfter = await p.getSum()
  await post(thisMonth, nextMonth, theMonthAfter)
  await driver.close()
}
