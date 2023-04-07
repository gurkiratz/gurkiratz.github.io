import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Articles() {
  const [articles, setArticles] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/news',
    }

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data.results)
        console.log(articles)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  const displayArticles = () => {
    if (articles.length > 0) {
      return articles.map((article) => {
        let { title, description, content, createdAt } = article.properties
        title = title.title[0].plain_text
        content = content.rich_text[0].plain_text
        description = description.rich_text[0].plain_text
        createdAt = new Date(createdAt.created_time).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        )
        const titleSlug = slugify(title, { lower: true })

        return (
          <Link
            key={article.id}
            to={`/articles/${titleSlug}`}
            state={{ title, content, createdAt }}
          >
            <div className="flex flex-col gap-2 sm:gap-12 sm:flex-row max-w-2xl hover:bg-slate-100 p-4 sm:p-6 rounded-2xl cursor-pointer">
              <p className="text-gray-400 text-sm flex items-center sm:items-start gap-3">
                <span className="inline-block w-[2px] h-4 bg-gray-400 sm:hidden"></span>{' '}
                {/* date */} {createdAt}
              </p>
              <div className="space-y-3">
                <p className="font-medium">
                  {/* title */} {title}
                </p>
                <p className="text-sm text-gray-500">
                  {/* description */} {description}
                </p>
                <p className="text-sm text-[#14B8A6]">Read article &#8594;</p>
              </div>
            </div>
          </Link>
        )
      })
    } else {
      return <div>No articles yet</div>
    }
  }

  if (error) return <div>{`Error: ${error.message}`}</div>
  if (!articles) return <div>No Articles</div>

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
        <div className="flex flex-col gap-4">
          {/* Article */}
          {displayArticles()}
          {/* Article End */}
        </div>
        {/* Articles End*/}
      </div>
    </div>
  )
}