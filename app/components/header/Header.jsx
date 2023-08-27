// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Logo
        </Link>
      </div>
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
    </header>
  );
};

export default Header;
