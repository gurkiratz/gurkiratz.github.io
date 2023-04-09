import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

async function Article() {
  const [error, setError] = useState('')

  const location = useLocation()
  const pageId = location.state.split('-').join('')
  console.log(pageId)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.notion.com/v1/blocks/${pageId}/children`,
      headers: {
        Authorization:
          'Bearer secret_Gc7ujULCqwVZ5EY5YHv0cO96HweyEZYV40TchsmpLqk',
        'Notion-Version': '2022-06-28',
      },
    }

    axios
      .request(options)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        setError(error)
        console.log(error)
      })
  }, [])

  // const description = article.content.slice(
  //   article.content.indexOf('<p>'),
  //   article.content.indexOf('</p>') + 4
  // )
  // const updatedContent = article.content.replace(description, '')
  return <div>Hello</div>
}

export default Article
