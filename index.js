import {CronJob} from 'cron'

import app from './app'

new CronJob('00 00 */3 * * *', () => {
  app()
    .catch(e => {
      console.log(e)
    })
}, null, true, 'Asia/Tokyo').start()
