// src/pages/OverviewComputing.tsx
import { useTranslation } from 'react-i18next';
import Timeline from "../components/panorama/timeline";
import Impact from "../components/panorama/humanimpact";
import Figures from "../components/panorama/keyfigures";
import Present from "../components/panorama/present";
import "../styles/OverviewComputing.css";

function OverviewComputing() {
    const { t } = useTranslation('overviewComputing');

    return (
        <div>
            <div className="container">
                <h1 className="overview-title">{t('title')}</h1>
                <p className="overview-description">{t('description')}</p>.
            </div>

            <section className="panorama-section">
                {/* <h1>Panorama de la Computación</h1> */}
                <Timeline />
                <Figures />
                <Impact />
                <Present />
            </section>
        </div>

    );
}

export default OverviewComputing;