import './Banner.scss'

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt={text} />
      {text && <h1>{text}</h1>}
    </div>
  )
}
