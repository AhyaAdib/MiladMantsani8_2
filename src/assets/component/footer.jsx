import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import '../styles/milad6.css'

export default function Footer()
{

    useEffect (() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <div className="footerContent">
                <div className="socialMedia">
                    <div className="quickLinks">
                        <h3 data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='5' data-aos-anchor-placement='bottom-bottom'>Quick Links</h3>
                        <ul>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='15' data-aos-anchor-placement='bottom-bottom'><a href="/#about">About</a></li>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='20' data-aos-anchor-placement='bottom-bottom'><a href="/#lomba">Events</a></li>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='25' data-aos-anchor-placement='bottom-bottom'><a href="/#gallery">Gallery</a></li>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='30' data-aos-anchor-placement='bottom-bottom'><a href="/#faq">FAQ</a></li>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='35' data-aos-anchor-placement='bottom-bottom'><a href="/#hasil">Hasil Pengumuman</a></li>
                            <li data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='40' data-aos-anchor-placement='bottom-bottom'><a href="/#footerContent">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="contactSection">
                        <h3 data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='55' data-aos-anchor-placement='bottom-bottom'>Contact Us</h3>
                        <p data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='70' data-aos-anchor-placement='bottom-bottom'>Alamat: Jl. Letjend Suprapto No.58, Burengan, Kec. Pesantren, Kota Kediri, Jawa Timur 64124</p>
                        <p data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='80' data-aos-anchor-placement='bottom-bottom'>Email: milad1mantsani@gmail.com</p>
                        <p data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='90' data-aos-anchor-placement='bottom-bottom'>Kontak: +62 815-5061-646</p>
                    </div>

                </div>

                <div className="socialMedia">

                    {/* Social Media Section */}
                    <div className="columnMedia mediaIcon" data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='100'>
                        <img src="/assets/img/log_grsf.png" width="110px" alt="Logo" />
                        <ul className="ulist">
                            <li className="ilist" data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='150' data-aos-anchor-placement='bottom-bottom'>
                                <a  href="https://instagram.com/miladmantsani?igshid=NDk5N2NlZjQ=">
                                    <i className="fa-brands fa-instagram"><p >@miladmantsani</p></i>
                                </a>
                            </li>
                            <li className="ilist" data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='200' data-aos-anchor-placement='bottom-bottom'>
                                <a  href="https://www.youtube.com/@garvimantsaniartoffame3">
                                    <i className="fa-brands fa-youtube"><p >@garvimantsaniartoffame3</p></i>
                                </a>
                            </li>
                            <li className="ilist" data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='200' data-aos-anchor-placement='bottom-bottom'>
                                <a  href="https://m.youtube.com/@MAN2KotaKediri">
                                    <i className="fa-brands fa-youtube"><p >@MAN2KotaKediri</p></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="googleMaps">
                        <iframe 
                            data-aos={'fade-right'} data-aos-easing='ease-out'  data-aos-delay='250' data-aos-anchor-placement='bottom-bottom'
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.717540339034!2d112.02613707476635!3d-7.819692992201017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78576dcdadf553%3A0x42430ab4a98cad12!2sMAN%202%20Kota%20Kediri!5e0!3m2!1sid!2sid!4v1735405587838!5m2!1sid!2sid"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            >
                        </iframe>
                    </div>
                </div>
            </div>

            
            <div className="copyrightText">
                <span >&copy; Garvi Mantsani Art of Fame  </span> <span style={{color: '#eeb942'}}> 2025</span>
            </div>
        </>
    )
}