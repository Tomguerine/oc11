import { useParams, Navigate } from 'react-router-dom'
import data from '../../data/data.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import './Property.scss'

export default function Property() {
  const { id } = useParams()
  const item = data.find((d) => d.id === id)
  if (!item) {
    return <Navigate to="/404" />
  }
  return (
    <div className="property">
      <Slideshow images={item.pictures} />
      <h1>{item.title}</h1>
      <p>{item.location}</p>
      <Collapse title="Description">{item.description}</Collapse>
      <Collapse title="Équipements">
        <ul>
          {item.equipments.map((eq) => (
            <li key={eq}>{eq}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  )
}
