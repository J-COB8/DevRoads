import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation('footer');

    return (
        <footer style={{ padding: '20px', backgroundColor: '#eee', marginTop: '30px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() => i18n.changeLanguage('es')}
                        aria-label="Cambiar idioma a español"
                        style={{ marginRight: '8px' }}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => i18n.changeLanguage('en')}
                        aria-label="Switch language to English"
                    >
                        EN
                    </button>
                </div>
            </div>
            <p>{t('reservedRights')}</p>
            <p>{t('contact')}</p>

            {/* Indicador de versión */}
            <p style={{ fontSize: '0.9em', color: '#555' }}>Versión 0.1.0</p>

            {/* Enlaces a redes */}
            <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/tunombre" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
                <a href="https://linkedin.com/in/tunombre" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;