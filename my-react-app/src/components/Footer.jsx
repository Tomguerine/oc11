import logo from '../assets/react.svg'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
