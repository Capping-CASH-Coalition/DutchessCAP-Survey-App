const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'enterprisedb',
  host: '10.10.9.205',
  database: 'CashCoalition',
  password: '@lgozzine',
  port: 5444,
})

pool.query('SELECT * FROM "Survey_Question"', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'enterprisedb',
  host: '10.10.9.205',
  database: 'CashCoalition',
  password: '@lgozzine',
  port: 5444,
})
client.connect()

client.query('SELECT * FROM "Survey_Question"', (err, res) => {
  console.log(err, res)
  client.end()
})
