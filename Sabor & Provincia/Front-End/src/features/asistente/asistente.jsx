import './asistente.css'
import { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaStop } from "react-icons/fa";
import { preguntarAlChef } from '../../services/asistente.service';

export default function Asistente() {
    const [estado, setEstado] = useState('inactivo');
    const [isActive, setIsActive] = useState(false);
    const [transcripcion, setTranscripcion] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const recognitionRef = useRef(null);
    const synthRef = useRef(window.speechSynthesis);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setErrorMsg('Tu navegador no soporta reconocimiento de voz. Usá Chrome como alternativa.');
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = 'es-CR';
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = async (event) => {
            const texto = event.results[0][0].transcript;
            setTranscripcion(texto);
            setEstado('procesando');

            const respuestaChef = await preguntarAlChef(texto);
            setRespuesta(respuestaChef);

            hablar(respuestaChef);
        };

        recognition.onerror = (event) => {
            console.error("Error de reconocimiento: ", event.error);
            setErrorMsg(`Error de micrófono: ${event.error}`);
            setEstado('inactivo');
        };

        recognition.onend = () => {
            console.log("El micrófono se ha cerrado.");
            if (estado !== 'hablando') setEstado('inactivo');
        };

        recognitionRef.current = recognition;
    }, []);

    useEffect(() => {
        const cargarVoces = () => synthRef.current.getVoices();
        cargarVoces();
        window.speechSynthesis.onvoiceschanged = cargarVoces;
    }, []);

    const hablar = (texto) => {
        synthRef.current.cancel();

        const mensaje = new SpeechSynthesisUtterance(texto);

        mensaje.lang = 'es-CR';
        mensaje.rate = 0.92;
        mensaje.pitch = 1.05;
        mensaje.volume = 1.0;

        const voces = synthRef.current.getVoices();

        const mejorVozEspanol = voces.find(v =>
            v.lang.includes('es-CR')
        ) || voces.find(v =>
            v.lang.startsWith('es') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Microsoft'))
        ) || voces.find(v =>
            v.lang.startsWith('es') && v.localService
        ) || voces.find(v =>
            v.lang.startsWith('es')
        );

        if (mejorVozEspanol) {
            mensaje.voice = mejorVozEspanol;
        }

        mensaje.onstart = () => {
            setEstado('hablando');
        };

        mensaje.onend = () => {
            setEstado('inactivo');
        };

        mensaje.onerror = (event) => {
            console.error("Error en la síntesis de voz: ", event.error);
            setEstado('inactivo');
        };

        synthRef.current.speak(mensaje);
    };

    const handleAction = (e) => {
        e.stopPropagation();
        setErrorMsg('');

        if (estado === 'hablando') {
            synthRef.current.cancel();
            setEstado('inactivo');
            return;
        }

        if (estado === 'escuchando') {
            recognitionRef.current?.stop();
            setEstado('inactivo');
            return;
        }

        setTranscripcion('');
        setRespuesta('');
        setEstado('escuchando');
        recognitionRef.current?.start();
    };

    const toggleAsistente = () => {

        if (isActive) {
            recognitionRef.current?.stop();
            synthRef.current?.cancel();
            setEstado('inactivo');
            setTranscripcion('');
            setRespuesta('');
            setErrorMsg('');
        }
        setIsActive(!isActive);
    };

    useEffect(() => {
        return () => {
            recognitionRef.current?.stop();
            synthRef.current?.cancel();
        };
    }, []);

    const STATUS_LABELS = {
        inactivo: 'INACTIVO',
        escuchando: 'ESCUCHANDO...',
        procesando: 'PROCESANDO...',
        hablando: 'HABLANDO...'
    };

    const BTN_LABELS = {
        inactivo: 'COMENZAR A ESCUCHAR',
        escuchando: 'DETENER',
        procesando: 'PROCESANDO...',
        hablando: 'INTERRUMPIR'
    };

    return (
        <>
            <div
                className='asistente-trigger'
                onClick={toggleAsistente}
                role="button"
                aria-label="Abrir asistente de voz Chef Turrialba"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleAsistente()}
            >
                <FaMicrophone size={25} />
            </div>

            <div
                className={`asistente-overlay ${isActive ? "active" : "hidden"}`}
                onClick={toggleAsistente}
                role="dialog"
                aria-modal="true"
                aria-label="Asistente de voz Chef Turrialba"
            >
                <div
                    className="asistente-modal"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className="asistente-title">Chef Turrialba</h3>

                    <div
                        className={`status-indicator ${estado}`}
                        aria-live="polite"
                        aria-label={`Estado: ${STATUS_LABELS[estado]}`}
                    >
                        <div className="status-icon">
                            {estado === 'inactivo' && <FaMicrophone size={20} />}
                            {estado === 'escuchando' && <FaMicrophone size={20} />}
                            {estado === 'procesando' && <div className="spinner" aria-hidden="true" />}
                            {estado === 'hablando' && '🔊'}
                        </div>
                        <p className="status-text">{STATUS_LABELS[estado]}</p>
                    </div>

                    {transcripcion && (
                        <div className="transcripcion" aria-live="polite">
                            <span className="transcripcion-label">Dijiste:</span>
                            <p>"{transcripcion}"</p>
                        </div>
                    )}

                    {respuesta && (
                        <div
                            className="respuesta-chef"
                            aria-live="assertive"
                            aria-label="Respuesta del Chef Turrialba"
                        >
                            <span className="respuesta-label">Chef Turrialba:</span>
                            <p>{respuesta}</p>
                        </div>
                    )}

                    {errorMsg && (
                        <div className="error-msg" role="alert">
                            {errorMsg}
                        </div>
                    )}

                    <div className="asistente-controls">
                        <button
                            className={`btn-main ${estado}`}
                            onClick={handleAction}
                            disabled={estado === 'procesando'}
                            aria-label={BTN_LABELS[estado]}
                        >
                            {estado === 'inactivo' || estado === 'procesando'
                                ? BTN_LABELS[estado]
                                : <><FaStop size={12} /> {BTN_LABELS[estado]}</>
                            }
                        </button>

                        <button
                            className="btn-close"
                            onClick={toggleAsistente}
                            aria-label="Cerrar asistente"
                        >
                            CANCELAR
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}