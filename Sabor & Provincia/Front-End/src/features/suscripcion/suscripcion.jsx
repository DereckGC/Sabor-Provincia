import { useState } from 'react';
import './suscripcion.css'
import HoverText from '../../components/HoverText/HoverText';
import useOnScreen from '../../hooks/useOnScreen';
import { subscribe } from '../../services/suscripcion.service';

export default function Suscripcion(){
    const [ref, isVisible] = useOnScreen({threshold : 0.2});
    const animClass = (anim) => isVisible ? `animate__animated ${anim}` : 'hidden-before-animate';

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!nombre || !correo) {
            setStatus({ type: 'error', message: 'Por favor, completa todos los campos.' });
            return;
        }

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await subscribe({ name: nombre, email: correo });
            setStatus({ type: 'success', message: '¡Gracias por suscribirte!' });
            setNombre('');
            setCorreo('');
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Error al suscribirse. Inténtalo de nuevo.' });
        } finally {
            setLoading(false);
        }
    };

    return(
        <section ref={ref} id='suscribirse' className='suscripcion-container'>
            
            <div className={`suscripcion-content ${animClass('animate__fadeInDown')}`}>
                <p className="suscripcion-label">— NOTIFICACIONES —</p>
                <h2 className="suscripcion-titulo">
                    <HoverText text="Recibe nuevas recetas cada semana" />
                </h2>

                <form className="suscripcion-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="subs-input"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            disabled={loading}
                        />
                        
                        <input 
                            type="email" 
                            placeholder="Correo" 
                            className="subs-input"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    {status.message && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                    <button type="submit" className="subs-button" disabled={loading}>
                        {loading ? 'SUSCRIBIENDO...' : 'SUSCRÍBETE'}
                    </button>
                </form>

                <p className="subs-disclaimer">
                    Al suscribirte aceptas que tus datos sean utilizados para enviarte mas información sobre rectas.
                </p>

                <div className="subs-decorations">
                    <div className="dot d1"></div>
                    <div className="dot d2"></div>
                    <div className="dot d3"></div>
                    <div className="dot d4"></div>
                    <div className="dot d5"></div>
                    <div className="dot d6"></div>
                    <div className="dot d7"></div>
                </div>

                <div className="subs-footer-text">
                    · RECETAS AUTÉNTICAS · CADA SEMANA · DIRECTO A TU CORREO ·
                </div>
            </div>
        </section>
    );
}