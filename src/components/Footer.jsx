import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg?url'
import bootstrapLogo from '../assets/bootstrap.svg'

function Footer() {
  return (
    <footer className="container-fluid border-top bg-light py-3">
      <p className="text-body-secondary text-center m-0">&copy; {new Date().getFullYear()} made with ☕ 💛 <img src={reactLogo} alt="React logo" /> <img src={viteLogo} alt="Vite logo" /> <img src={bootstrapLogo} alt="Bootstrap logo" /></p>
    </footer>
  )
}

export default Footer