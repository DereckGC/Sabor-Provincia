import './footer.css'

export default function Footer(){
    return(
        <footer className="footer-container">
            <section className="section-footer-title">
                <h2 className="footer-large-title">Sabor & Provincia</h2>
            </section>
            
            <hr className='footer-divider'/>
            
            <section className='section-footer-info'>
                <div className='footer-brand'>
                    <span className='footer-info-text p1'><strong>Sabor & Provincia</strong></span>
                </div>
                
                <div className='footer-links'>
                    <span className='footer-info-text p1'>Don Pepe</span>
                    <span className='footer-info-text p1'>ElGuche</span>
                </div>
                
                <div className='footer-copyright'>
                    <span className='footer-info-text p2'>© 2026 Sabor & Provincia. Todos los derechos reservados.</span>
                </div>
            </section>
        </footer>
    );
}