const PORT = 8000
const express = require('express')
const { Client } = require('@notionhq/client')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/articles', async (req, res) => {
  const databaseId = process.env.NOTION_ARTICLE_DATABASE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  console.log(response)
  res.json(response)
})

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT)
})
