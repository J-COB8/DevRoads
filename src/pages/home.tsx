import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import "./home.css";

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
        <main className="min-h-screen bg-white text-black">
            <section className="max-content">

                {/* Título e Introducción */}
                <header className="text-center section-block">
                    <h1 className="text-3xl md:text-6xl font-semibold mb-4">
                        {t('welcome')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-block">{t('introduction')}</p>
                </header>

                {/* Sección de Visión */}
                <section className="section-block">
                    <h2 className="text-2xl font-medium mb-6 text-center">{t('vision')}</h2>

                    <div className="vision-card bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-6">
                        {[
                            { key: 'goal', title: t('goal'), text: t('goal-text') },
                            { key: 'tool', title: t('tool'), text: t('tool-text') },
                            { key: 'function', title: t('function'), text: t('function-text') }
                        ].map((item) => (
                            <div key={item.key}>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-block small-paragraph font-semibold mt-6 text-center">
                        {t('vision-extra-text')}
                    </p>
                </section>

                {/* Desarrollo */}
                <section className="section-block text-block">
                    <h2 className="diagram-title font-medium mb-3">{t('development')}</h2>
                    <p>{t('development-text')}</p>
                </section>

                {/* Etapas del Proyecto */}
                <section className="section-block">
                    <h2 className="text-2xl text-center">{t('stages')}</h2>
                    <div className="stages-list max-w-xl mx-auto">
                        {stagesData.map((stage, index) => (
                            <div
                                key={index}
                                className={`stage-card ${expandedIndex === index ? 'expanded' : ''}`}
                                onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                            >
                                <div className="stage-header">
                                    <span>{stage.title}</span>
                                    <span>{expandedIndex === index ? '−' : '+'}</span>
                                </div>
                                {expandedIndex === index && stage.subItems.length > 0 && (
                                    <ul className="subitems-list">
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
                <section className="section-block text-block">
                    <h2 className="text-2xl font-medium mb-3">{t('Me')}</h2>
                    <p>{t('Me-text')}</p>
                </section>
            </section>
        </main>
    );
}

export default Home;