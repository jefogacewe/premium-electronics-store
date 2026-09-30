export const metadata = {
  title: 'Premium Electronics Store',
  description: 'Premium electronics ecommerce experience',
};

import Link from 'next/link';
import './globals.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/cart', label: 'Cart' },
  { href: '/login', label: 'Login' },
  { href: '/admin', label: 'Admin' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              <span className="brand-mark">P</span>
              Premium Tech
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/cart" className="nav-cta">
              Cart (2)
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <h4>Premium Tech</h4>
              <p>Built for serious tech lovers.</p>
            </div>
            <div>
              <p>Contact</p>
              <a href="mailto:hello@premiumtech.example">hello@premiumtech.example</a>
            </div>
            <div>
              <p>Follow</p>
              <a href="#">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
