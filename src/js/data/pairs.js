/**
 * DShare trading default currency pairs.
 *
 * This list is a bit arbitrary, but it's basically the Majors [1] from forex
 * trading with some LAT pairs added.
 *
 * [1] http://en.wikipedia.org/wiki/Currency_pair#The_Majors
 */
module.exports = [
  {name: 'LAT/USD', order: 1},
  {name: 'BTC/LAT', order: 1},
  {name: 'LAT/USD', order: 1},
  {name: 'LAT/EUR', order: 1},
  {name: 'LAT/JPY', order: 0},
  {name: 'LAT/GBP', order: 0},
  {name: 'LAT/AUD', order: 0},
  {name: 'LAT/CHF', order: 0},
  {name: 'LAT/CAD', order: 0},
  {name: 'LAT/CNY', order: 0},
  {name: 'BTC/USD', order: 0},
  {name: 'BTC/EUR', order: 0},
  {name: 'EUR/USD', order: 0},
  {name: 'USD/JPY', order: 0},
  {name: 'GBP/USD', order: 0},
  {name: 'AUD/USD', order: 0},
  {name: 'USD/CHF', order: 0}
];
