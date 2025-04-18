/* eslint-disable react/prop-types */
import '../styles/milad6.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from 'react';

export default function Sponsor()
{
    const sponsors = [
        {
            name: 'Aparture',
            logo: '/assets/sponsorLogo/Aparture.jpg',
            website: '#',
        },
        {
            name: 'Byu',
            logo: '/assets/sponsorLogo/byu.png',
            website: '#',
        },
        {
            name: 'Ganesha Operation',
            logo: '/assets/sponsorLogo/GO.jpg',
            website: '#',
        },
        {
            name: 'Joyo Rosan',
            logo: '/assets/sponsorLogo/joyorosan.PNG',
            website: '#',
        },
        {
            name: 'Krezz',
            logo: '/assets/sponsorLogo/krezz.png',
            website: '#',
        },
        {
            name: 'Maxim',
            logo: '/assets/sponsorLogo/maxim.jpg',
            website: '#',
        },
        {
            name: 'Neutron',
            logo: '/assets/sponsorLogo/neutron.png',
            website: '#',
        },
        {
            name: 'Salsabila Medika',
            logo: '/assets/sponsorLogo/salsabila.jpg',
            website: '#',
        },
        {
            name: 'Salsabila Medika',
            logo: '/assets/sponsorLogo/salsabila1.jpg',
            website: '#',
        },
        {
            name: 'Serba Indah',
            logo: '/assets/sponsorLogo/serbaindah.png',
            website: '#',
        },
        {
            name: 'Telkomsel',
            logo: '/assets/sponsorLogo/telkomsel.png',
            website: '#',
        },
        {
            name: 'Wahyu Barokah',
            logo: '/assets/sponsorLogo/wahyubarokah.png',
            website: '#',
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        
        <section id="sponsorship" className="sponsor-section">
            <h1 data-aos="fade-up">Didukung Oleh</h1>
            <br></br>
            <div className="sponsor-grid">
                {sponsors.map((s, i) => (
                    <a key={i} href={s.website} className="sponsor-card" data-aos="zoom-in">
                        <img src={s.logo} alt={s.name} />
                        <p id='sponsorTitle'>{s.name}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}