import { useParams, useLocation } from 'react-router-dom'
import { Interweave } from 'interweave'

function Article() {
  const location = useLocation()
  const article = location.state
  return (
    <div>
      <h1>{article.title}</h1>
      <Interweave content={article.content} />
      {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
    </div>
  )
}

export default Article
