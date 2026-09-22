import { Link } from 'react-router-dom'
import LogoVector from './LogoVector'
import './Footer.css'

const columns = [
  {
    title: 'Portafolio',
    links: [
      { label: 'Línea PRO', href: '/pro' },
      { label: 'Línea PyME', href: '/pymes' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Servicios', href: '#services' },
      { label: 'Sectores', href: '#sectors' },
      { label: 'Nosotros', href: '#contact' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'vector.estrategia.co@gmail.com', href: 'mailto:vector.estrategia.co@gmail.com' },
    ],
  },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoVector width={143} />
          </div>
          <p className="footer-tagline">
            Consultoría estratégica en competitividad con inteligencia artificial para profesionales independientes y pequeñas empresas en Colombia.
          </p>
        </div>

        {columns.map(({ title, links }) => (
          <div key={title}>
            <div className="footer-col-title">{title}</div>
            <ul className="footer-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith('mailto:') ? (
                    <a href={href} className="footer-link magnetic">{label}</a>
                  ) : href.startsWith('/') ? (
                    <Link to={href} className="footer-link magnetic">{label}</Link>
                  ) : (
                    <button type="button" className="footer-link magnetic" onClick={() => scrollTo(href)}>
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 VECTOR Estrategia · Lucas Velásquez. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
