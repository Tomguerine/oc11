import { Link } from 'react-router-dom'
import './Card.scss'

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}
