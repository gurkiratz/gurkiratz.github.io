import { Link } from 'react-router-dom'
import slugify from 'slugify'

function ArticleCard({ article, name }) {
  let createdAt = article.createdAt
  const titleSlug = slugify(article.title, { lower: true })
  const state = {
    name,
    createdAt,
    title: article.title,
  }
  return (
    <Link to={`/articles/${titleSlug}`} state={state}>
      <div className="flex flex-col gap-2 sm:gap-12 md:gap-24 sm:flex-row max-w-2xl hover:bg-gray-100 duration-150 ease-in-out p-4 sm:p-6 rounded-2xl cursor-pointer">
        <p className="text-gray-400 text-sm flex items-center sm:items-start gap-3">
          <span className="inline-block w-[2px] h-4 bg-gray-400 sm:hidden"></span>{' '}
          {/* date */} {createdAt}
        </p>
        <div className="space-y-3">
          <p className="font-semibold text-gray-800">
            {/* title */} {article.title}
          </p>
          <p className="text-sm text-gray-500">
            {/* description */} {article.description}
          </p>
          <p className="text-sm text-[#14B8A6]">Read article &#8594;</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
