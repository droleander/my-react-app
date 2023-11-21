import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg?url'
import bootstrapLogo from '../assets/bootstrap.svg'

function Footer() {
  return (
    <footer className="container-fluid text-center">
      <div className="py-3 my-4 border-top">
        <p className="m-0 text-body-secondary">&copy; {new Date().getFullYear()} made with ☕ 💛 <img src={reactLogo} alt="React logo" /> <img src={viteLogo} alt="Vite logo" /> <img src={bootstrapLogo} alt="Bootstrap logo" /></p>
      </div>
    </footer>
  )
}

export default Footer