import tw from 'twin.macro'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/Container'

const A = tw.a`font-bold underline cursor-pointer text-gray-800`

const projectsData = [
  {
    id: 1,
    title: 'Wishlistify',
    description:
      'React/TypeScript app for easy wishlist creation, updation and deletion\nTechnologies: React, TypeScript, Recoil.js State Management, Tailwind CSS',
    link: 'https://github.com/gurkiratz/wishlistify',
    demo: 'https://soft-travesseiro-288fbe.netlify.app/',
  },
  {
    id: 2,
    title: 'World Clock',
    description:
      'A clone of iPhone World Clock\nTechnologies: React, day.js package, Tailwind CSS',
    link: 'https://github.com/gurkiratz/dayjs-app',
    demo: 'https://gurkiratz.github.io/dayjs-app/',
  },
  {
    id: 3,
    title: 'Emaily Server',
    description:
      'A full stack app to send surveys and emails (Under construction)\nTechnologies: Node.js, TypeScript, Express, Google OAuth2.0, Prisma ORM',
    link: 'https://github.com/gurkiratz/emaily-server',
    demo: 'https://github.com/gurkiratz/emaily-server',
  },
  {
    id: 4,
    title: 'Mukhwak Bot (Discord)',
    description:
      'A Discord bot that provides a daily Hukamnama from Sri Darbar Sahib, Sri Amritsar (Under construction)\nTechnologies: Node.js, Discord.js',
    link: 'https://github.com/gurkiratz/mukhwak-bot',
    demo: 'https://github.com/gurkiratz/mukhwak-bot',
  },
  {
    id: 5,
    title: 'Portfolio',
    description:
      'My Personal Portfolio website\nTechnologies: React, React Router, Tailwind CSS',
    link: 'https://github.com/gurkiratz/gurkiratz.github.io',
    demo: 'https://devkirat.me/',
  },
  {
    id: 6,
    title: 'Receipt Calculator',
    description:
      'This app can be used by cashiers to add products, their price and quantity to checkout and print a receipt for the user\nTechnologies: HTML, Tailwind CSS, JavaScript',
    link: 'https://github.com/gurkiratz/receipt-calculator',
    demo: 'https://gurkiratz.github.io/receipt-calculator/',
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
      <p className="text-[1rem] leading-normal whitespace-pre-line">{project.description}</p>
      <div>
        <a
          href={project.demo}
          target="_blank"
          className="text-sm mt-2 text-gray-500"
        >
          Visit the website →
        </a>
      </div>
    </div>
  )
}
