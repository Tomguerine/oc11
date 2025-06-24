import { useState } from 'react'
import './Collapse.scss'

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`collapse ${open ? 'open' : ''}`}>
      <button className="collapse-header" onClick={() => setOpen(!open)}>
        {title}
        <span className="arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="collapse-content">{children}</div>}
    </div>
  )
}
