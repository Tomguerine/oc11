import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}
