import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'

function Article() {
  let navigate = useNavigate()
  const [articleData, setArticleData] = useState(null)
  const [error, setError] = useState()
  const location = useLocation()
  const pageId = location.state.id.split('-').join('')
  const createdAt = location.state.createdAt
  const title = location.state.title

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

  return (
    <div className="lg:pl-[136px] mt-12 max-w-[60rem] flex flex-col justify-start items-start gap-6 lg:flex-row lg:relative">
      <button className="lg:absolute lg:left-4">
        <MdKeyboardBackspace
          onClick={() => navigate(-1)}
          className="p-3 border text-lg h-10 w-10 bg-white rounded-full shadow hover:text-black/95"
        />
      </button>
      <div className="space-y-6">
        <p className="text-gray-400 flex items-center gap-3 ">
          <span className="inline-block w-[1.5px] h-4 bg-gray-300"></span>{' '}
          {createdAt}
        </p>
        <p className="text-3xl font-extrabold text-gray-800 ">{title}</p>
        <div className="space-y-5">{renderContent()}</div>
      </div>
    </div>
  )
}

export default Article
