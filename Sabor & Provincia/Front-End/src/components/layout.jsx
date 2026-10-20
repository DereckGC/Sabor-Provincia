import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Asistente from '../features/asistente/asistente';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Asistente />
            <main>{children}</main>
            <Footer />
        </>
    );
}