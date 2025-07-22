import { useTranslation } from 'react-i18next';

export default function Impact() {
    const { t } = useTranslation('overviewComputing');
    return (
        <section>
            <h2>{t("human_impact_title")}</h2>
            <p>{t("human_impact_description")}</p>
        </section>
    );
}