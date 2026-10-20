import './receta.css';
import { ProcedimientoData } from './receta.data';
import useOnScreen from '../../hooks/useOnScreen';

export default function Procedimiento() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.01 });
    
    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    return (
        <div ref={ref} className="procedimiento-list">
            {ProcedimientoData.procedimientos.map((item, index) => (
                <div className={`${animClass('animate__fadeInUpBig')}`}>
                    <div key={index} className='paso-row'>
                        <span className="paso-numero">0{index + 1}</span>
                        <div className="paso-texto">
                            <h4 className="paso-titulo">{item.paso}</h4>
                            <p className="paso-desc">{item.descripcion}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}