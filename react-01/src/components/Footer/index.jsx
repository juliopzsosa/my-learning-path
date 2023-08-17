import "./Footer.css";

const Footer = () => {
  // Se pone el 'backgroundImage de esa manera ya que si se pusiera en CSS sería complicado ubicar la carpeta Public'
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.svg)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/img/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/instagram.svg" alt="instagram" />
        </a>
      </div>
      <img src="/img/logo.svg" alt="org" />
      <strong>Desarrollado por Alura</strong>
    </footer>
  );
};

export default Footer;
