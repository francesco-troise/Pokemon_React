import { Link, NavLink } from 'react-router-dom';
import Logo_pkm from '../../assets/Logo_pkm.jpg';

export default function Header() {
  return (
    <header className="container-fluid py-4">
      <nav className="d-flex justify-content-between align-items-center border border-dark rounded-pill p-2 px-4 bg-white shadow-sm">

        <Link to="/" className="d-flex align-items-center">
          <img
            src={Logo_pkm}
            alt="Logo Pokemon"
            className="rounded-pill"
            style={{ height: '45px', width: 'auto' }}
          />
        </Link>

        <span className="d-none d-md-block text-uppercase fw-bold ls-1 small border-start border-end border-dark px-4">
          Gotta catch 'em all!
        </span>

        <ul className="d-flex align-items-center list-unstyled m-0 gap-2">
          <li>
            <NavLink to="/"className="btn btn-outline-dark">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pokemon" className="btn btn-outline-dark">
              Pokédex
            </NavLink>
          </li>
          <li>
            <NavLink to="/generazioni" className="btn btn-outline-dark">
              Generazioni
            </NavLink>
          </li>
          <li>
            <NavLink to="/tipi" className="btn btn-outline-dark">
              Tipologie
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}