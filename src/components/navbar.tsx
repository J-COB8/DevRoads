import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
    const { t } = useTranslation('navbar');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="navbar">
                <div className="navbar__logo">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center text-black no-underline hover:opacity-80"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <img src="/logo.png" alt="DevRoads logo" style={{
                            height: '30px',
                            verticalAlign: 'middle',
                            marginRight: '8px'
                        }}
                        />
                        {t('DevRoads')}
                    </Link>
                </div>

                <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    {/* Eliminamos el link duplicado de Home */}
                    <Link to="/overviewComputing" onClick={closeMenu}>{t('overviewComputing')}</Link>
                    <Link to="/about" onClick={closeMenu}>{t('about')}</Link>
                    <Link to="/contribute" onClick={closeMenu}>{t('contribute')}</Link>
                </nav>

                <div className="navbar__toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </header>

            {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
        </>
    );
}

export default Navbar;