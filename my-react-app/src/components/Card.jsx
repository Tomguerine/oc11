import { Link } from 'react-router-dom'
import './Card.scss'

export default function Card({ id, title }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <div className="card-title">{title}</div>
    </Link>
  )
}
