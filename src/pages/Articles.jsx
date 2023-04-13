import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Interweave } from 'interweave'
import { useEffect } from 'react'
import axios from 'axios'

export default function Articles() {
  // const getDatabase = async () => {
  // const response = await notion.databases.retrieve({
  //   database_id: process.env.NOTION_ARTICLE_DATABASE_ID,
  // })
  // console.log(response)
  // }

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/news',
    }

    axios
      .request(options)
      .then((response) => {
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const renderedArticles = articles.map((article) => {
    const titleSlug = slugify(article.title, { lower: true })
    const description = article.content.slice(
      article.content.indexOf('<p>'),
      article.content.indexOf('</p>') + 4
    )
    return (
      <Link key={article.id} to={`/articles/${titleSlug}`} state={article}>
        <div className="flex flex-col gap-2 sm:gap-12 sm:flex-row max-w-2xl hover:bg-slate-100 p-4 sm:p-6 rounded-2xl cursor-pointer">
          {/* date */}
          <p className="text-gray-400 text-sm flex items-center sm:items-start gap-3">
            <span className="inline-block w-[2px] h-4 bg-gray-400 sm:hidden"></span>{' '}
            {new Date(article.published).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="space-y-3">
            {/* title */}
            <p className="font-medium">{article.title}</p>
            {/* description */}
            <p className="text-sm text-gray-500">
              <Interweave content={description} />
            </p>
            <p className="text-sm text-[#14B8A6]">Read article &#8594;</p>
          </div>
        </div>
      </Link>
    )
  })

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
          {/* <div className="flex flex-col gap-2 sm:gap-12 sm:flex-row max-w-2xl hover:bg-slate-100 p-4 sm:p-6 rounded-2xl ">
            <p className="text-gray-400 text-sm flex items-center sm:items-start gap-3">
              <span className="inline-block w-[2px] h-4 bg-gray-400 sm:hidden"></span>{' '}
              February 4, 2023
            </p>
            <div className="space-y-3">
              <p className="font-medium">Lorem ipsum dolor sit.</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic!
              </p>
              <p className="text-sm text-[#14B8A6]">Read article &#8594;</p>
            </div>
          </div> */}
          {renderedArticles}
          {/* Article End */}
        </div>
        {/* Articles End*/}
      </div>
    </div>
  )
}
