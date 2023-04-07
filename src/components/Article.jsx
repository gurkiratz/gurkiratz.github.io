import { useParams, useLocation } from 'react-router-dom'
import { Interweave } from 'interweave'

function Article() {
  const location = useLocation()
  const { title, content, createdAt } = location.state
  // const description = article.content.slice(
  //   article.content.indexOf('<p>'),
  //   article.content.indexOf('</p>') + 4
  // )
  // const updatedContent = article.content.replace(description, '')
  return (
    <div>
      <span>{createdAt}</span>
      <h1>{title}</h1>
      <div>{content}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
    </div>
  )
}

export default Article
