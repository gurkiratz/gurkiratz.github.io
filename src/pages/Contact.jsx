import Container from '../components/Container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Social } from './Home'

const Contact = () => {
  const openWidget = () => {
    Calendly.initPopupWidget({
      url: 'https://calendly.com/gurkiratz/quick-chat?hide_gdpr_banner=1',
    })
  }

  return (
    <Container>
      <div>
        <h1 className="text-2xl font-extrabold  text-gray-800">Contact</h1>
        <div>
          <p className="italic">Ask me anything or just say hi 👋</p>
        </div>
        <div className="mt-6 mb-6">
          <p className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:singh.gurkirat2707@gmail.com" className="underline">
              singh.gurkirat2707@gmail.com
            </a>
          </p>
          <p className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +1 (437) 677-3928
          </p>
        </div>
        <Social />
      </div>

      <button
        className="mt-16 md:mt-20 py-2 px-6 bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        onClick={openWidget}
      >
        Have a quick chat →
      </button>
      <ToastContainer />
    </Container>
  )
}

export default Contact
