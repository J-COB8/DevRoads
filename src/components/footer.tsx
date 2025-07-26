import { useTranslation } from 'react-i18next';
import styles from '../styles/footer.module.css';

function Footer() {
    const { t, i18n } = useTranslation('footer');

    return (
        <footer className={styles.footerContainer}>
            {/* Selector de idioma */}
            <div className={styles.languageSelector}>
                <button
                    onClick={() => i18n.changeLanguage('es')}
                    aria-label="Cambiar idioma a español"
                    className={styles.languageButton}
                >
                    ES
                </button>
                <button
                    onClick={() => i18n.changeLanguage('en')}
                    aria-label="Switch language to English"
                    className={styles.languageButton}
                >
                    EN
                </button>
            </div>

            <p>{t('reservedRights')}</p>
            <p>{t('contact')}</p>

            <p className={styles.footerVersion}>Versión 0.1.0</p>

            <div className={styles.footerLinks}>
                <a href="https://github.com/J-COB8/DevRoads" target="_blank" rel="noopener noreferrer">GitHub</a>
                {" | "}
                <a href="https://linkedin.com/in/joaquin-alvarez-mercado" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;