import axios from 'axios'


export async function post(nextMonth, theMonthAfter) {
  const time = Math.floor(new Date().getTime() / 1000)
  const service = process.env.MACKEREL_SERVICE_NAME
  await axios.post(`https://mackerel.io/api/v0/services/${service}/tsdb`,
    [
      {
        name: 'NextMonth',
        time: time,
        value: nextMonth
      },
      {
        name: 'TheMonthAfter',
        time: time,
        value: theMonthAfter
      }
    ],
    {
      headers: {
        'X-Api-Key': process.env.MACKEREL_API_KEY
      }
    }
  )
}
