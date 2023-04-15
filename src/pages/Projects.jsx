import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Projects() {
  useDocumentTitle('Projects - Gurkirat Singh')
  return (
    <div className="lg:pl-[136px] flex flex-col gap-3 text-lg mt-12">
      <div className="max-w-[40rem]">
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">Projects</h1>
        <div className="text-lg leading-normal space-y-6">
          <p>
            My main focus these days is Tailwind CSS — an open-source
            utility-first CSS framework for rapidly building custom user
            interfaces.
          </p>
          <p>
            I made the decision to work on it full-time beginning in 2019, and
            have a lot of plans for continuing to improve the framework, grow
            the community, and expand the ecosystem.
          </p>
        </div>
      </div>
    </div>
  )
}
