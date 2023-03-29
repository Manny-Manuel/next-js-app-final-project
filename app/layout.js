import './global.scss';
import Link from 'next/link';
import ImageLogo from './ImageLogo';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    // eslint-disable-next-line no-restricted-syntax

    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <ImageLogo />
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/galery">Galery</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/logout">Logout</Link>
          </nav>
        </header>
        {children}
        <div className="footer">
          <footer>All right reserved Populary</footer>
        </div>
      </body>
    </html>
  );
}
