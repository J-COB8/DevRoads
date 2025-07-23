import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from "../styles/home.module.css";

function Home() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const { t } = useTranslation('home');

    const stagesData = [
        {
            title: t('stage1-title'),
            subItems: [
                t('stage1.1'),
                t('stage1.2'),
                t('stage1.3'),
                t('stage1.4'),
                t('stage1.5'),
            ],
        },
        {
            title: t('stage2-title'),
            subItems: [],
        },
        {
            title: t('stage3-title'),
            subItems: [],
        },
        {
            title: t('stage4-title'),
            subItems: [],
        },
        {
            title: t('stage5-title'),
            subItems: [],
        },
    ];

    return (
        <main className={styles["main"]}>
            <section className={styles["max-content"]}>

                {/* Título e Introducción */}
                <header className={styles["section-block"] + ' ' + styles["text-center"]}>
                    <h1 className={styles["welcome-title"]}>
                        {t('welcome')}
                    </h1>
                    <p className={styles["introduction"]}>{t('introduction')}</p>
                </header>

                {/* Sección de Visión */}
                <section className={styles["section-block"]}>
                    <h2 className={styles["vision-title"]}>{t('vision')}</h2>

                    <div className={styles["vision-card"]}>
                        {[
                            { key: 'goal', title: t('goal'), text: t('goal-text') },
                            { key: 'tool', title: t('tool'), text: t('tool-text') },
                            { key: 'function', title: t('function'), text: t('function-text') }
                        ].map((item) => (
                            <div key={item.key}>
                                <h3 className={styles["vision-subtitle"]}>{item.title}</h3>
                                <p className={styles["vision-text"]}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className={styles["vision-extra-text"]}>
                        {t('vision-extra-text')}
                    </p>
                </section>

                {/* Desarrollo */}
                <section className={`${styles["section-block"]} ${styles["text-block"]}`}>
                    <h2 className={styles["diagram-title"]}>{t('development')}</h2>
                    <p>{t('development-text')}</p>
                </section>

                {/* Etapas del Proyecto */}
                <section className={styles["section-block"]}>
                    <h2 className={styles["stages-title"]}>{t('stages')}</h2>
                    <div className={styles["stages-list"]}>
                        {stagesData.map((stage, index) => (
                            <div
                                key={index}
                                className={`${styles["stage-card"]} ${expandedIndex === index ? styles["expanded"] : ""}`}
                                onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                            >
                                <div className={styles["stage-header"]}>
                                    <span>{stage.title}</span>
                                    <span>{expandedIndex === index ? '−' : '+'}</span>
                                </div>
                                {expandedIndex === index && stage.subItems.length > 0 && (
                                    <ul className={styles["subitems-list"]}>
                                        {stage.subItems.map((item, subIdx) => (
                                            <li key={subIdx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sobre mí */}
                <section className={`${styles["section-block"]} ${styles["text-block"]}`}>
                    <h2 className={styles["me-title"]}>{t('Me')}</h2>
                    <p>{t('Me-text')}</p>
                </section>
            </section>
        </main>
    );
}

export default Home;