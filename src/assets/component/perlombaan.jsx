/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react"
import "../styles/milad6.css"

function CardComponent({Index, Id, Title, Link, Img, Content }) {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
                else setIsVisible(false)
            },
            { threshold: 0.1 } // Memicu saat 10% elemen terlihat
        )

        if (cardRef.current) {
        observer.observe(cardRef.current)
    }

    return () => {
        // Tambahkan pengecekan jika cardRef.current null atau undefined
        if (cardRef.current) {
            observer.unobserve(cardRef.current)
        }
    }
}, [])

    return (
        <div className={`container ${Index %2 == 1 ? 'rightContainer' : ''}`}>
            <p className="titleOuter">
                {Title}
            </p>
            <div ref={cardRef} className={`card ${isVisible ? "active" : ""}`}>
                <div className={`imgbox ${Id}`}>
                    <a href={`comp/${Link}`}>
                        {<img src={Img} alt={Title} /> || <Skeleton /> }
                    </a>
                </div>
                <div className="content">
                    <p className="titleLomba">{Title}</p>
                    <p className="contentLombaPrev">{Content}</p>
                    <button className={`cta ${isVisible ? "active" : ""}`}>
                        <a style={{ textDecoration: "none" }} href={`comp/${Link}`}>
                            <span>Baca Selengkapnya</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Lomba()
{
    const lombaData = [
        {
            idSpes: 'imgboxmo',
            title: 'OSSMA',
            link: 'ossma',
            img: '/assets/logo/ossma.png',
            description:
            'OSSMA (Olympiad of Science, Social, Mathematics) merupakan event tahunan yang diselenggarakan dalam rangkaian Milad MAN 2 Kota Kediri. OSSMA sebelumnya bernama IESMO adalah Olimpiade Se-Jawa Timur yang menguji kemampuan peserta pada tiga bidang utama, yaitu: IPA, IPS, dan Matematika.',
        },
        {
            idSpes: 'imgbox',
            link: 'mico',
            title: 'MICO',
            img: '/assets/logo/mico.png',
            description:
            'MICO (Mantsani Scientific Research Competition) merupakan perlombaan Karya Tulis Ilmiah (KTI) dan Poster Ilmiah yang diselenggarakan untuk seluruh siswa/i SMP/MTs-sederajat yang ada di Provinsi Jawa Timur.',
        },
        {
            idSpes: 'imgboxmedco',
            title: 'MEDCO',
            link: 'medco',
            img: '/assets/logo/medco.png',
            description:
            'MEDCO (MAN 2 Kota Kediri Education Debate Competition ) adalah lomba debat yang diikuti oleh siswa/i SMP/MTs se-Provinsi Jawa Timur',
        },
        {
            idSpes: 'iqrama',
            title: 'IQRAMA',
            link: 'iqrama',
            img: '/assets/logo/iqrama.png',
            description:
            "IQRAMA adalah lomba MTQ antar-SMP/MTs se-Jawa Timur yang digelar pertama kali pada 2023. Lomba ini mengangkat nilai-nilai Al-Qur'an dan menggunakan sistem penilaian kepada masing² peserta lomba seperti makhraj, lagu dan penghayatan ayat.",
        },
        {
            idSpes: 'mafco',
            title: 'MAFCO',
            link: 'mafco',
            img: '/assets/logo/mafco.png',
            description:
            'MAFCO (MAN 2 Kota Kediri  Kaligrafi Competition) adalah lomba kaligrafi yang diikuti oleh siswa/i SMP/MTs se-Jawa Timur. Acara perlombaan ini pertama kali diselenggarakan pada tahun 2025 sebagai bagian dari rangkaian Milad MAN 2 Kota Kediri yang ke-8.',
        },
        {
            idSpes: 'mantara',
            title: 'MANTARA',
            link: 'mantara',
            img: '/assets/logo/mantara.png',
            description:
            "MANTARA (MAN 2 Kota Kediri Toreh Tinta dan Rasa) adalah ajang cipta baca puisi SMP/MTs se-Jawa Timur, menggali makna ayat Al-Qur'an melalui ekspresi, keindahan bahasa, dan pesan spiritual penuh nilai kemanusiaan.",
        },
        {
            idSpes: 'speco',
            title: 'SPECO',
            link: 'speco',
            img: '/assets/logo/speco.png',
            description:
            'SPECCO 2025: Kompetisi pidato Bahasa Inggris untuk siswa MTs/SMP. Tema: "Digital Green Warrior" - Mengembangkan generasi muda berani bicara untuk keberlanjutan bangsa.',
        },
        {
            idSpes: 'ashwatuna',
            title: 'ASHWATUNA',
            link: 'ashwatuna',
            img: '/assets/logo/ashwatuna.png',
            description:
            'ASHWATUNA 2025: Kompetisi pidato Bahasa Arab untuk siswa MTs/SMP. Tema: "Moderasi dalam beragama" - Mengembangkan generasi muda berani bicara untuk keberlanjutan bangsa.',
        },
        {
            idSpes: 'visco',
            title: 'VISCO',
            link: 'visco',
            img: '/assets/logo/visco.png',
            description:
                'VISCO (Voice of Stars Competition) adalah kompetisi vokal MAN 2 Kota Kediri dalam rangka Milad Mantsani #8. Ajang ini mewadahi calon bintang dari SMP/MTs/sederajat di Jawa Timur untuk bersaing sehat, menunjukkan bakat terbaik, dan bersinar melalui aksi panggung inspiratif.',
        },
        {
            idSpes: 'mtmc',
            title: 'MTMC',
            link: 'mtmc',
            img: '/assets/logo/mtmc.png',
            description:
                'MTMC (MAN 2 Kota Kediri Tenis Meja Cup) merupakan kompetisi Tenis Meja resmi yang diselenggarakan oleh MAN 2 Kota Kediri pertama kali yaitu tahun 2025 ini.',
        },
        {
            idSpes: 'mbc',
            title: 'MBC',
            link: 'mbc',
            img: '/assets/logo/mbc.png',
            description:
            'MBC (MAN 2 Kota Kediri Badminton Competition) adalah ajang pertandingan bulutangkis yang di selenggarakan oleh Mantsani Badminton Club dan di laksanakan di MAN 2 kota kediri dan diikuti oleh siswa/i SMP/Mts se-Jawa Timur.',
        },
        {
            idSpes: 'mcc',
            title: 'MCC',
            link: 'mcc',
            img: '/assets/logo/mcc.png',
            description:
                'MCC (MAN 2 KOTA KEDIRI CHESS CHAMPIONSHIP adalah kompetisi catur yang diikuti oleh siswa/i SMP/MTs se-Jawa Timur. Turnamen ini perdana dan pertama kali diadakan pada tahun 2025 sebagai salah satu rangkaian perlombaan untuk memeriahkan Milad Man 2 Kota Kediri yang ke-8.',
        },
        {
            idSpes: 'aryaPraga',
            title: 'ARYA PRAGA',
            link: 'aryaPraga',
            img: '/assets/logo/aryaPraga.png',
            description:
            'ARYA PRAGA (Ajang Berkarya Pramuka Penggalang) merupakan perlombaan bidang kepramukaan yang diselenggarakan oleh PRAMANDIGA Pramuka MAN 2 Kota Kediri untuk Pramuka tingkat penggalang se-Jawa Timur dengan 6 cabang mata lomba yaitu Yelfest, Pionering, SMS, Ranking 1, Videografi dan PPGD.',
        },
    ]
    
    return (
        <>
            <section id="lomba">
                <div className="judul">
                    <center>
                        <h2 className="titleText">LOMBA</h2>
                        <div className="ket">
                            <p>{"klik logo untuk informasi lebih lengkap"}</p>
                        </div>
                    </center>
                </div>


                {lombaData.map((item, index) => (
                    <CardComponent 
                        key={index}
                        Id={item.idSpes}
                        Title={item.title}
                        Img={item.img}
                        Link={item.link}
                        Content={item.description}
                        Index={index}
                    />
                ))}
            </section>
        </>
    )
}