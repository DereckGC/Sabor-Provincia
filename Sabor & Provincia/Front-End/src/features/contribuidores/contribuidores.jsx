import './contribuidores.css';
import { ContribuidoresData } from './contribuidores.data';
import CardDonPepe from './card-don-pepe';
import CardElGuche from './card-elguche';
import useOnScreen from '../../hooks/useOnScreen';
import HoverText from '../../components/HoverText/HoverText';

export default function Contribuidores() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const anim = (effect) => isVisible ? `animate__animated ${effect}` : 'hidden';

    return (
        <section ref={ref} id="contribuidores" className="contribuidores-container">
            {/* Imágenes decorativas de fondo */}
            <div className={`deco-container c1 ${anim('animate__fadeInLeftBig')}`}>
                <img src="/images/contribuidores-image1.png" className="deco-contri" alt="Decoración 1" />
            </div>

            <div className={`deco-container c2 ${anim('animate__fadeInUpBig')}`}>
                <img src="/images/contribuidores-image2.png" className="deco-contri" alt="Decoración 2" />
            </div>

            <div className={`deco-container c3 ${anim('animate__fadeInUpBig')}`}>
                <img src="/images/contribuidores-image3.jpg" className="deco-contri" alt="Decoración 3" />
            </div>

            <div className="contribuidores-header">
                <p className={`contri-labels ${anim('animate__fadeInLeftBig')}`}>
                    <HoverText text={ContribuidoresData.labels} />
                </p>
                <h2 className={`contri-title ${anim('animate__fadeInRightBig')}`}>
                    <HoverText text={ContribuidoresData.title} />
                </h2>
                <p className={`contri-subtitle ${anim('animate__fadeInRightBig')}`}>
                    <HoverText text={ContribuidoresData.subtitle} />
                </p>
            </div>

            <div className="cards-wrapper">
                <div className={`${anim('animate__fadeInDownBig')}`}>
                    <CardDonPepe />
                </div>
                <div className={`${anim('animate__fadeInUpBig')}`}>
                    <CardElGuche />
                </div>
            </div>
        </section>
    );
}