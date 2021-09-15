import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <button aria-label="nav_footer">
        <i className="fas fa-home"></i>
      </button>
      <button aria-label="nav_footer">
        <i className="far fa-heart"></i>
      </button>
      <button aria-label="nav_footer">
        <i className="fas fa-cogs"></i>
      </button>
    </footer>
  );
}

export default Footer;
