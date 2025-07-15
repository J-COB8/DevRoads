
import { useTranslation } from 'react-i18next';

function overviewComputing() {
    const { t } = useTranslation('overviewComputing');

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
        </div>
    );
}

export default overviewComputing;