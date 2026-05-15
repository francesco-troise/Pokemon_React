import Logo_pkm from '../../assets/Logo_pkm.jpg';

export default function Footer() {
  // Otteniamo l'anno corrente dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid mt-auto py-4">
      <div className="d-flex justify-content-between align-items-center border-top border-dark pt-4 px-2">

        <div className="border border-dark px-3 py-2 rounded-3 shadow-sm bg-white">
          <small className="fw-bold text-uppercase">
            © {currentYear} — PokéApp Project
          </small>
          <div className="text-muted" style={{ fontSize: '0.7rem' }}>
            Dati forniti da <a href="https://pokeapi.co/" target="_blank" className="text-decoration-none">PokeAPI</a>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="text-end d-none d-sm-block">
            <p className="m-0 small fw-semibold">Diventa il migliore,</p>
            <p className="m-0 small text-danger fw-bold">come nessuno è stato mai!</p>
          </div>

          <div className="border border-dark rounded-pill p-2 bg-white shadow-sm">
            <img
              src={Logo_pkm}
              alt="Logo Footer"
              style={{ height: '40px', width: 'auto', filter: 'grayscale(20%)' }}
            />
          </div>
        </div>

      </div>
    </footer>
  );
}