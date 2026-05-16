import { NavLink } from 'react-router-dom';
import Logo_pkm from '../../assets/Logo_pkm.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid mt-auto py-4 bg-dark text-white shadow-lg">
      <div className="d-flex justify-content-between align-items-center pt-2 px-2">

        <div className="border border-light px-3 py-2 rounded-3 shadow-sm bg-dark">
          <small className="fw-bold text-uppercase">
            © {currentYear} — PokéApp Project
          </small>
          <div className="text-light-50" style={{ fontSize: '0.7rem' }}>
            Dati forniti da <a href="https://pokeapi.co/" target="_blank" rel="noreferrer" className="text-info text-decoration-none fw-bold">PokeAPI</a>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="text-end d-none d-sm-block">
            <p className="m-0 small fw-semibold">Diventa il migliore,</p>
            <p className="m-0 small text-warning fw-bold text-uppercase">come nessuno è stato mai!</p>
          </div>

          <div className="border border-light rounded-pill p-2 bg-white shadow-sm">
            <NavLink to="/">
              <img
                src={Logo_pkm}
                alt="Logo Footer"
                style={{ height: '40px', width: 'auto' }}
              />
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}