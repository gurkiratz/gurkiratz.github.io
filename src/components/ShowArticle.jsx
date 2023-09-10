import { useLocation, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { lazy, Suspense } from 'react'

function Article() {
  let navigate = useNavigate()
  const location = useLocation()
  const name = location.state?.name
  const createdAt = location.state?.createdAt
  const title = location.state?.title
  useDocumentTitle(title)
  const LazyComponent = lazy(() => import(`../markdown/${name}.mdx`))

  return (
    <div className="lg:pl-[136px] mt-12 max-w-[60rem] flex flex-col justify-start items-start gap-6 lg:flex-row lg:relative">
      <button className="lg:absolute lg:left-4">
        <MdKeyboardBackspace
          onClick={() => navigate(-1)}
          className="p-3 border text-lg h-10 w-10 bg-white rounded-full shadow hover:text-black/95"
        />
      </button>
      <div>
        <p className="text-gray-400 flex items-center gap-3 mb-2">
          <span className="inline-block w-[1.5px] h-4 bg-gray-300"></span>{' '}
          {createdAt}
        </p>
        <p className="text-3xl font-extrabold text-gray-800 mb-6">{title}</p>
        <div className="space-y-5">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Article
