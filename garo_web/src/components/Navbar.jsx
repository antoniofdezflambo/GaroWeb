import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li> <Link to='/'> Resultados </Link> </li>
        <li> <Link to='/clasificacion'> Clasificación </Link> </li>
        <li> <Link to='/videos'> Vídeos </Link> </li>
        <li> <Link to='/estadisticas'> Estadísticas </Link> </li>
      </ul>
    </nav>
  )
}

export default Navbar