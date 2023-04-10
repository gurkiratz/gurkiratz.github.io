import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
// import articleData from '../data/articleData.json'

function Article() {
  const [articleData, setArticleData] = useState(null)
  const [error, setError] = useState()
  const location = useLocation()
  const pageId = location.state.split('-').join('')

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `http://localhost:8000/article/${pageId}`,
    }

    axios
      .request(options)
      .then((response) => {
        setArticleData(response.data.results)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  function renderContent() {
    if (articleData.length > 0) {
      return articleData.map((block) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={block.id}>
                {block.paragraph.rich_text.map((richtext, i) =>
                  richtext.text.link ? (
                    <a
                      className="underline"
                      key={i}
                      href={richtext.text.link.url}
                      target="_blank"
                    >
                      {richtext.plain_text}
                    </a>
                  ) : (
                    richtext.plain_text
                  )
                )}
              </p>
            )

          case 'image':
            return (
              <img
                key={block.id}
                src={block.image.external.url}
                alt={block.image.caption[0]?.plain_text}
              />
            )

          case 'embed':
            return (
              <img
                key={block.id}
                src={block.embed.url}
                alt={block.embed.caption[0].plain_text}
              />
            )

          default:
            return null
        }
      })
    } else {
      return <div>No Data loaded</div>
    }
  }

  if (error) return <div>{`Error: ${error.message}`}</div>
  if (!articleData) return <div>Loading ...</div>

  // const description = article.content.slice(
  //   article.content.indexOf('<p>'),
  //   article.content.indexOf('</p>') + 4
  // )
  // const updatedContent = article.content.replace(description, '')
  return <div>{renderContent()}</div>
}

export default Article
