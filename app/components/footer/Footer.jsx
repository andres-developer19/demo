
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul>
        <li>
            <Link href="/design">
                Diseño web
            </Link>
          </li>
          <li>
            <Link href="/services">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/materials">
              Materiales
            </Link>
          </li>
          <li>
            <Link href="/delivery">
              Entrega
            </Link>
          </li>
          <li>
            <Link href="/investment">
              Inversion
            </Link>
          </li>
          {/* Agrega más elementos de navegación aquí */}
        </ul>
      </nav>
      <p>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
