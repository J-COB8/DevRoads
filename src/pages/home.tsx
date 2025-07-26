import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from "../styles/home.module.css";

function Home() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const { t } = useTranslation('home');

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