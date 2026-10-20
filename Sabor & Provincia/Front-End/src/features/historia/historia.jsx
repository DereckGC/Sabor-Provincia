import './historia.css';
import { HistoriaData } from './historia.data';
import HoverText from '../../components/HoverText/HoverText';
import useOnScreen from '../../hooks/useOnScreen';

export default function Historia() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    return (
        <section ref={ref} id="historia" className="historia-container historia">
            <div className="historia-labels-banner">
                <h2 className={`labels-text ${animClass('animate__fadeInLeft')}`}>
                    <HoverText text={HistoriaData.labels} />
                </h2>
            </div>

            <div className="historia-main-content">
                <div className="historia-grid">
                    <div className="historia-text-column">
                        <h3 className={`historia-titulo ${animClass('animate__fadeInLeft')}`}>
                            <HoverText text={HistoriaData.titulo} />
                        </h3>
                        <p className={`historia-p ${animClass('animate__fadeInUpBig')}`}>{HistoriaData.texto1}</p>
                        <p className={`historia-p ${animClass('animate__fadeInUpBig')}`}>{HistoriaData.texto2}</p>
                        <div className={`historia-divider ${animClass('animate__fadeInLeft')}`}></div>
                    </div>

                    <div className="historia-image-column">
                        <div className={`main-recipe-frame ${animClass('animate__fadeInTopRight')}`}>
                            <img src="public\images\historia-image2.png" alt="Pasta con salsa" className="recipe-img img-1" />
                        </div>
                        
                        {/* Imágenes decorativas flotantes */}
                        <div className={`deco-wrapper ${animClass('animate__fadeInDownBig')}`}>
                            <div className="deco-image top-right">
                                <img className="img-2" src="public\images\historia-image1.png" alt="Volcán Turrialba" />
                            </div>
                        </div>
                        <div className={`deco-wrapper ${animClass('animate__fadeInUpBig')}`}>
                            <div className="deco-image bottom-left">
                                <img className="img-3" src="public\images\historia-image3.png" alt="Cocinera tradicional" />
                            </div>
                        </div>
                        <div className={`deco-wrapper ${animClass('animate__fadeInLeft')}`}>
                            <div className="deco-image bottom-center">
                                <img className="img-4" src="public\images\historia-image3.png" alt="Horno de leña" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}