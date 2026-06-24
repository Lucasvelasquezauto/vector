import { Link } from 'react-router-dom'
import LogoVector from './LogoVector'
import './FlowHeader.css'

export default function FlowHeader() {
  return (
    <header className="flow-header">
      <Link to="/" className="flow-header-logo magnetic">
        <LogoVector width={105} />
      </Link>
      <Link to="/" className="flow-header-back magnetic">
        Volver al inicio
      </Link>
    </header>
  )
}
