import HoverText from '../../components/HoverText/HoverText';
import './hero.css';
import {HeroData} from './hero.data'
import useOnScreen from '../../hooks/useOnScreen';

export default function Hero() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    return (
        <section ref={ref} id="hero" className="hero-container hero">
            <div className="hero-main-content">
                <div className="hero-text-side">
                    <h1 className={`hero-title ${animClass('animate__fadeInLeft')}`}>
                        <HoverText text={HeroData.titulo} /> <br />
                        <span className="hero-subtitle">
                            <HoverText text={HeroData.subtitulo} />
                        </span>
                    </h1>

                    <div className={`hero-buttons ${animClass('animate__fadeInRightBig')}`}>
                        <a href="#receta" className="btn-primary">Ver Receta</a>
                        <a href="#suscribirse" className="btn-secondary">Suscribirse</a>
                    </div>
                </div>

                <div className={`hero-image-side ${animClass('animate__fadeInDownBig')}`}>
                    <div className="hero-circular-frame">
                        <img
                            src="public\images\hero-image2.png"
                            alt="Paisaje de Turrialba"
                        />
                    </div>
                </div>
            </div>

            <div className="hero-stats-bar">
                <div className={`stat-item ${animClass('animate__fadeInDown')}`}>
                    <span className="stat-number">{HeroData.minutos}</span>
                    <span className="stat-label">Minutos</span>
                </div>
                <div className={`stat-item ${animClass('animate__fadeInUp')}`}>
                    <span className="stat-number">{HeroData.porciones}</span>
                    <span className="stat-label">Porciones</span>
                </div>
                <div className={`stat-item ${animClass('animate__fadeInDown')}`}>
                    <span className="stat-number">{HeroData.dificultad}</span>
                    <span className="stat-label">Dificultad</span>
                </div>
                <div className={`stat-item ${animClass('animate__fadeInUp')}`}>
                    <span className="stat-number">{HeroData.origen}</span>
                    <span className="stat-label">Origen</span>
                </div>
            </div>
        </section>
    );
}