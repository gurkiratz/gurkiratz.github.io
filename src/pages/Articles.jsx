import { useEffect, useState } from 'react'
import axios from 'axios'
import useDocumentTitle from '../hooks/useDocumentTitle'
import ArticleCard from '../components/ArticleCard'

export default function Articles() {
  useDocumentTitle('Articles - Gurkirat Singh')
  const [articles, setArticles] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://portfolio-backend-bars.onrender.com/articles',
    }

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data.results)
        sessionStorage.setItem(
          'articles',
          JSON.stringify(response.data.results)
        )
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  useEffect(() => {
    if (window.sessionStorage !== undefined) {
      const data = window.sessionStorage.getItem('articles')
      data !== null ? setArticles(JSON.parse(data)) : null
    }
  }, [])

  const displayArticles = () => {
    if (articles) {
      return articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))
    } else {
      return <div>No articles yet</div>
    }
  }

  if (error)
    return (
      <div>
        {`Error: ${error.message}`}{' '}
        <p>
          You will not be able to see articles page unless you start a backend
          (as it contains API keys)
        </p>
      </div>
    )

  return (
    <div className="lg:pl-[136px] flex flex-col gap-3 mt-12">
      <div className="max-w-[40rem]">
        {/* Heading */}
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
          Thoughts on Software Development, Gamedev, and other topics.
        </h1>
        <p className="text-sm mb-12">
          All of my long-form thoughts on programming/software development,
          gamedev, and more, collected in chronological order.
        </p>
        {/* Heading End*/}

        {/* Articles */}
        <div className="flex flex-col gap-4 sm:relative">
          <span className="hidden sm:inline-block w-[1px] h-full bg-gray-200 sm:absolute"></span>
          {/* Article */}
          {articles ? displayArticles() : <div>Loading ...</div>}
          {/* Article End */}
        </div>
        {/* Articles End*/}
      </div>
    </div>
  )
}
