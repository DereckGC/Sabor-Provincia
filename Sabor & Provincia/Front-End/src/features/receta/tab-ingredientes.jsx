import './receta.css';
import { IngredientesData } from './receta.data';
import useOnScreen from '../../hooks/useOnScreen';

export default function Ingredientes() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    return (
        <div ref={ref} className="ingredientes-list">
            {IngredientesData.ingredientes.map((item, index) => (
                <div key={index} className="ingrediente-row">
                    <span className={`ing-nombre ${animClass('animate__fadeInLeftBig')}`}>{item.ingrediente}</span>
                    <span className={`ing-cantidad ${animClass('animate__fadeInRightBig')}`}>{item.cantidad}</span>
                </div>
            ))}
        </div>
    );
}