function Header() {
  return (
    <header className="container">
      <div className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <h1 className="mb-3 mb-md-0 me-lg-auto">React.js + Vite + Bootstrap</h1>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header