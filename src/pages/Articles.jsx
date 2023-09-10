import useDocumentTitle from '../hooks/useDocumentTitle'
import ArticleCard from '../components/ArticleCard'
import Container from '../components/Container'
import * as article1 from '../markdown/02-appreciation-post.mdx'
import * as article2 from '../markdown/01-hello-world.mdx'

export default function Articles() {
  useDocumentTitle('Articles - Gurkirat Singh')
  const articles = [
    { name: '02-appreciation-post', component: article1 },
    { name: '01-hello-world', component: article2 },
  ]

  const displayMDarticles = () => {
    return articles.map((article) => (
      <ArticleCard
        article={article.component}
        key={article.name}
        name={article.name}
      />
    ))
  }

  return (
    <Container>
      {/* Heading */}
      <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
        Thoughts on Software Development, Gamedev, and other topics.
      </h1>
      {/* Heading End*/}

      {/* Articles */}
      <div className="flex flex-col gap-4 sm:relative">
        <span className="hidden sm:inline-block w-[1px] h-full bg-gray-200 sm:absolute"></span>
        {/* Article */}
        {displayMDarticles()}
        {/* Article End */}
      </div>
      {/* Articles End*/}
    </Container>
  )
}
