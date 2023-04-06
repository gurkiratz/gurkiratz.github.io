import { useParams, useLocation } from 'react-router-dom'

function Article() {
  const location = useLocation()
  const article = location.state
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  )
}

export default Article
