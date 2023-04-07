import { useParams, useLocation } from 'react-router-dom'
import { Interweave } from 'interweave'

function Article() {
  const location = useLocation()
  const article = location.state
  const description = article.content.slice(
    article.content.indexOf('<p>'),
    article.content.indexOf('</p>') + 4
  )
  const updatedContent = article.content.replace(description, '')
  return (
    <div>
      <h1>{article.title}</h1>
      <Interweave content={updatedContent} />
      {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
    </div>
  )
}

export default Article
