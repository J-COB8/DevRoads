// src/pages/OverviewComputing.tsx

import { useTranslation } from 'react-i18next';
import Timeline from "../components/panorama/timeline";
import Impact from "../components/panorama/humanimpact";
import Figures from "../components/panorama/keyfigures";
import Present from "../components/panorama/present";
import styles from "../styles/OverviewComputing.module.css";

function OverviewComputing() {
    const { t } = useTranslation('overviewComputing');

    return (
        <div>
            <div className={styles["container"]}>
                <h1 className={styles["overview-title"]}>{t('title')}</h1>
                <p className={styles["overview-description"]}>{t('description')}</p>.
            </div>

            <section className={styles["panorama-section"]}>
                <Timeline />
                <Figures />
                <Impact />
                <Present />
            </section>

        </div>

    );
}

export default OverviewComputing;