import { useState } from 'react';
import './receta.css';
import Procedimiento from './tab-procedimiento';
import Ingredientes from './tab-ingredientes';
import { RecetaData } from './receta.data';
import HoverText from '../../components/HoverText/HoverText';
import useOnScreen from '../../hooks/useOnScreen';

export default function Receta() {
    const [activeTab, setActiveTab] = useState('ingredientes');
    const [ref, isVisible] = useOnScreen({ threshold: 0.01 });

    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    return (
        <section ref={ref} id="receta" className="receta-container">
            {/* Decoraciones de fondo */}
            <div className={`deco-container d1 ${animClass('animate__fadeInDownBig')}`}>
                <img src="/images/receta-image1.png" className="deco-receta" alt="" />
            </div>
            <div className={`deco-container d2 ${animClass('animate__fadeInLeftBig')}`}>
                <img src="/images/receta-image2.png" className="deco-receta" alt="" />
            </div>
            <div className={`deco-container d3 ${animClass('animate__fadeInUpBig')}`}>
                <img src="/images/receta-image3.png" className="deco-receta" alt="" />
            </div>

            <div className="receta-header">
                <p className={`receta-labels ${animClass('animate__fadeInRightBig')}`}>
                    <HoverText text={RecetaData.labels} />
                </p>
                <h2 className={`receta-titulo-principal ${animClass('animate__fadeInLeftBig')}`}>
                    <HoverText text={RecetaData.titulo} />
                </h2>
            </div>

            <div className={`tabs-container ${animClass('animate__fadeInRightBig')}`}>
                <div className="tabs-buttons">
                    <button 
                        className={`tab-btn ${activeTab === 'ingredientes' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ingredientes')}
                    >
                        INGREDIENTES
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'procedimiento' ? 'active' : ''}`}
                        onClick={() => setActiveTab('procedimiento')}
                    >
                        PREPARACIÓN
                    </button>
                </div>
                
                <div className="tab-content">
                    {activeTab === 'ingredientes' ? <Ingredientes /> : <Procedimiento />}
                </div>
            </div>
        </section>
    );
}