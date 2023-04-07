const PORT = 8000
const express = require('express')
const { Client } = require('@notionhq/client')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const notion = new Client({
  auth: 'secret_Gc7ujULCqwVZ5EY5YHv0cO96HweyEZYV40TchsmpLqk',
})

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/news', async (req, res) => {
  const databaseId = '84d09caada504c09ac38936974563e08'
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  console.log(response)
  res.json(response)
})

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT)
})
