import tw from 'twin.macro'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/Container'

const A = tw.a`font-bold underline cursor-pointer text-gray-800`

const projectsData = [
  {
    id: 1,
    title: 'World Clock',
    description:
      'World Clock w/ dayjs package - Choose your timezone with ease🚀',
    link: 'https://gurkiratz.github.io/dayjs-app/',
  },
  {
    id: 2,
    title: 'Portfolio',
    description:
      'My Personal Portfolio website made using React and Tailwind (Under construction)',
    link: 'https://gurkiratz.github.io/portfolio-v1/',
  },
  {
    id: 3,
    title: 'Receipt Calculator',
    description:
      'This app can be used by cashiers to add products, their price and quantity to checkout and print a receipt for the user. (Not responsive❗)',
    link: 'https://gurkiratz.github.io/01-Receipt-Calculator-App/',
  },
]

export default function Projects() {
  useDocumentTitle('Projects - Gurkirat Singh')

  return (
    <Container>
      <h1 className="text-2xl font-extrabold mb-4 text-gray-800">Projects</h1>
      <div className="text-lg leading-normal space-y-6">
        <p>
          Here is a showcase of some of my projects that I made. They can be
          found on my{' '}
          <A href="https://github.com/gurkiratz" target="_blank">
            Github !
          </A>{' '}
          I am working on some projects that involve TypeScript and NextJS, they
          will be uploaded in a while.
        </p>
      </div>
      <div className="space-y-10 mt-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="">
      <div>
        <a
          href={project.link}
          target="_blank"
          className="text-lg text-gray-800 leading-normal font-bold no-underline hover:underline"
        >
          {project.title}
        </a>
      </div>
      <p className="text-[1rem] leading-normal">{project.description}</p>
      <div>
        <a
          href={project.link}
          target="_blank"
          className="text-sm mt-2 text-gray-500"
        >
          Visit the website →
        </a>
      </div>
    </div>
  )
}
