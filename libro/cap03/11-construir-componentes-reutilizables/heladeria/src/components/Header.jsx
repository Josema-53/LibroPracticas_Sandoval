// Practica: Header recibe el contador desde App, que es quien lo guarda
const Header = ({ avisos }) => (
  <>
    <h1>La Heladería</h1>
    <p className="header-avisos" aria-live="polite">
      Ítems marcados como agotados: {avisos}
    </p>
  </>
);

export default Header;
