import { useTranslation } from 'react-i18next';

function contribute() {
    const { t } = useTranslation('contribute');

    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}

export default contribute;