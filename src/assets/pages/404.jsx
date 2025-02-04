import Header from "../component/header"
import 'viewerjs/dist/viewer.css';
import '../styles/milad6.css';
import '../styles/noPage.css';
import Footer from "../component/footer";
import Navbar from "../component/navbar";

export default function Iesmo() {
    return (
        <>
            <Navbar />
            <section className="NoPage" id="NoPage">
                <h1>Error 404: Not Found</h1>
                <h2>Maaf, Halaman Tidak Ditemukan!</h2>
                <h3>Mohon Periksa lagi URL Anda</h3>
            </section>

            <Footer/>
            
            {/* <Footer /> */}
        </>
    )
}