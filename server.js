const PORT = 8000
const axios = require('axios')
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
  res.json(response)
})

app.get('/article/:pageId', async (req, res) => {
  const pageId = req.params.pageId
  const response = await notion.blocks.children.list({
    block_id: pageId,
  })
  res.json(response)

  // const res2 = await axios.request({
  //   method: 'GET',
  //   url: `https://api.notion.com/v1/blocks/${pageId}/children`,
  //   headers: {
  //     Authorization: process.env.NOTION_API_KEY,
  //     'Notion-Version': '2022-06-28',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // })
  // res.json(res2.data)
})

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT)
})
