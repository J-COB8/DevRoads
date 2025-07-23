import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from '../styles/navbar.module.css';

function Navbar() {
    const { t } = useTranslation('navbar');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className={styles.navbar}>
                <div className={styles["navbar__logo"]}>
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center text-black no-underline hover:opacity-80"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <img
                            src="/logo.png"
                            alt="DevRoads logo"
                            style={{
                                height: '30px',
                                verticalAlign: 'middle',
                                marginRight: '8px'
                            }}
                        />
                        {t('DevRoads')}
                    </Link>
                </div>

                <nav className={clsx(
                    styles["navbar__links"],
                    menuOpen && styles.open
                )}>
                    <Link to="/overviewComputing" onClick={closeMenu}>{t('overviewComputing')}</Link>
                    <Link to="/about" onClick={closeMenu}>{t('about')}</Link>
                    <Link to="/contribute" onClick={closeMenu}>{t('contribute')}</Link>
                </nav>

                <div className={styles["navbar__toggle"]} onClick={toggleMenu}>
                    ☰
                </div>
            </header>

            {menuOpen && (
                <div className={styles["navbar__overlay"]} onClick={closeMenu} />
            )}
        </>
    );
}

export default Navbar;