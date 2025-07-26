// src/pages/OverviewComputing.tsx

import { useTranslation } from 'react-i18next';
import Timeline from "../components/panorama/timeline/timeline";
import Impact from "../components/panorama/humanimpact";
import Figures from "../components/panorama/keyfigures";
import Present from "../components/panorama/present";
import styles from "../styles/OverviewComputing.module.css";
import { useNavigate } from 'react-router-dom';
import { TimelineEvent } from '../models/timeline_event';
// dentro del componente:

function OverviewComputing() {
    const { t } = useTranslation('overviewComputing');
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles["container"]}>
                <h1 className={styles["overview-title"]}>{t('title')}</h1>
                <p className={styles["overview-description"]}>{t('description')}</p>.
            </div>

            <section className={styles["panorama-section"]}>
                <Timeline selectedEvent={null} onSelectEvent={function (event: TimelineEvent | null): void {
                    throw new Error('Function not implemented.');
                }} />
                <div>
                    <button
                        onClick={() => navigate("/timeline-full")}
                        className={styles["expand-button"]}
                    >
                        {t('expandTimeline')}
                    </button>
                </div>
                <Figures />
                <Impact />
                <Present />
            </section>

        </div>

    );
}

export default OverviewComputing;