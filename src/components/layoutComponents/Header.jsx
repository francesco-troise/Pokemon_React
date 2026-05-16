import { Link, NavLink } from 'react-router-dom';
import Logo_pkm from '../../assets/Logo_pkm.jpg';

export default function Header() {
  return (
    <header className="container-fluid py-4">
      <nav
        className="d-flex justify-content-between align-items-center border border-dark border-2 rounded-pill p-3 px-4 shadow-sm"
        style={{ backgroundColor: '#e3f2fd' }} // Azzurrino chiaro (stile Bootstrap light-blue)
      >

        {/* LOGO - Ingrandito a 65px */}
        <Link to="/" className="d-flex align-items-center">
          <img
            src={Logo_pkm}
            alt="Logo Pokemon"
            className="rounded-circle border border-dark" // Cerchio con bordo per farlo risaltare
            style={{ height: '65px', width: '65px', objectFit: 'cover' }}
          />
        </Link>

        {/* SLOGAN */}
        <span className="d-none d-lg-block text-uppercase fw-bold small border-start border-end border-dark px-4 mx-2 text-dark">
          Gotta catch 'em all!
        </span>

        {/* NAVIGATION */}
        <ul className="d-flex align-items-center list-unstyled m-0 gap-2 text-nowrap">
          <li>
            <NavLink
              to="/"
              className="btn btn-outline-dark"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokemon"
              className="btn btn-outline-dark"
            >
              Pokédex
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/generations"
              className="btn btn-outline-dark"
            >
              Generazioni
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/types"
              className="btn btn-outline-dark"
            >
              Tipologie
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}