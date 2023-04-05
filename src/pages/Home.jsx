import tw from 'twin.macro'

const A = tw.a`font-bold underline cursor-pointer text-gray-800`

export default function Home() {
  return (
    <div className="lg:pl-[136px] flex flex-col gap-3 text-lg mt-12">
      <div className="max-w-[40rem]">
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
          Who the hell am I?
        </h1>
        <div className="text-lg leading-normal space-y-6">
          <p>
            I'm{' '}
            <A href="www.github.com/gurkiratz" target="_blank">
              @gurkiratz
            </A>
            , learning React and NodeJS, entrepreneur, and{' '}
            <A>Harleen's brother.</A>
          </p>
          <p>
            I share everything I know about making awesome software through my
            articles, talks, screencasts, podcast, and courses.
          </p>
        </div>
      </div>
    </div>
  )
}
