import tw from 'twin.macro'
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Timer from '../components/Timer'
import Container from '../components/Container'

export const A = tw.a`font-bold underline cursor-pointer text-gray-800`
const AS = tw.a`text-gray-700 text-2xl hover:text-gray-900 ease-in duration-100`
export default function Home() {
  useDocumentTitle('Gurkirat Singh')
  return (
    <Container>
      <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
        Who the hell am I?
      </h1>
      <div className="text-lg leading-normal space-y-6 mb-8">
        <p>
          Hi! I'm{' '}
          <A href="https://github.com/gurkiratz" target="_blank">
            Gurkirat
          </A>
          , a Computer Science student at 🎓
          <a
            href="https://humber.ca/"
            target="_blank"
            className="hover:underline cursor-pointer"
          >
            Humber College, Toronto
          </a>{' '}
          graduating in April, 2026.
        </p>
        <p>
          <span className="hover:underline">I'm 20 years old </span> and I've
          been exploring full-stack for about a year now -{' '}
          <span className="hover:underline">
            {' '}
            or <em> exactly</em> <Timer /> milliseconds!{' '}
          </span>
        </p>
        <p>
          <span className="hover:underline">
            I use HTML, CSS, JavaScript and TypeScript.
          </span>{' '}
          Though constantly changing, my focus right now is{' '}
          <span className="hover:underline">
            React.js, Node, Express, Serverless and Next.js.{' '}
          </span>{' '}
          <span className="group hover:underline">
            Besides, I also have a secret affair with{' '}
            <span className="">Tailwind CSS</span>.{' '}
          </span>
          <em>
            {' '}
            Shh, don't tell my other coding frameworks, they might get jealous!
          </em>
        </p>

        <Social />
      </div>
    </Container>
  )
}

export function Social() {
  return (
    <div className="flex gap-10 text-2xl text-gray-500">
      <AS href="https://github.com/gurkiratz" target="_blank">
        <BsGithub />
      </AS>
      <AS href="https://twitter.com/theGurSingh" target="_blank">
        <BsTwitter />
      </AS>
      <AS href="https://www.linkedin.com/in/gurkiratz/" target="_blank">
        <BsLinkedin />
      </AS>
      <AS href="https://www.instagram.com/gurkiratxz/" target="_blank">
        <BsInstagram />
      </AS>
    </div>
  )
}
