/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import '../styles/milad6.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// AboutText Component
function AboutText({ title, content, className = '', animateAOS = 'fade-up', quest = 'What'}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className={`what ${className}`} data-aos={animateAOS}>
            <h2 className="titleText">
                <p className='titleContent'>
                    {quest} Is <span>{title}?</span>
                </p>
            </h2>
            <p>{content}</p>
        </div>
    );
}

// AboutImg Component
function AboutImg({ className = '', source, description, animateAOS = 'fade-up', id }) {
    const imageRef = useRef(null);
    const viewerRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            viewerRef.current = new Viewer(imageRef.current, {
                inline: false,
                viewed() {
                    viewerRef.current.zoomTo(0.5);
                },
            });
        }

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleImageClick = () => {
        if (viewerRef.current) {
            viewerRef.current.show();
        }
    };

    return (
        <div className={`what ${className}`} data-aos={animateAOS}>
            <div className={`pamflet ${id}`}>
                <img
                    ref={imageRef}
                    onClick={handleImageClick}
                    src={source}
                    alt={description}
                />
            </div>
        </div>
    );
}

// AboutImg.propTypes = {
//     className: PropTypes.string,
//     source: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     animateAOS: PropTypes.string,
// };

// AboutImg.defaultProps = {
//     className: '',
//     animateAOS: 'fade-up',
// };

// About Component
export default function About() {
    const mainData = {
        type: 'text',
        title: 'Garsafa',
        className: 'mainAbout',
        content:
            'Garvi berasal dari Bahasa Sanksekerta yang artinya kebanggan, nama ini kita ambil karena kegiatan ini akan menjadi acara kebanggaan MAN 2 Kota Kediri. Mantsani berasal dari Bahasa Arab dan merupakan identitas madrasah kita. Art of Fame berarti kita menunjukan penampilan karya seni dari siswa-siswi MAN 2 Kota Kediri sendiri.',
        animateAOS: 'fade-up',
    };

    const aboutData = [
        {
            type: 'text',
            title: 'Arshikara',
            className: 'unknown',
            content:
                <>
                    <div className="paragraph">
                        <span>Pada Milad tahun ini, kami mengusung tema </span>
                        <b style={{ color: 'yellow' }}>“ARSIKHARA”</b>
                        <span>, yang berasal dari gabungan kata </span>
                        <b style={{ color: 'yellow' }}>“Arete”</b>
                        <span> (keunggulan) dan </span>
                        <b style={{ color: 'yellow' }}>“Sikhara”</b>
                        <span> (puncak). Tema ini melambangkan perjalanan menuju </span>
                        <span>puncak keunggulan, sebuah </span>
                        <span>pencapaian tertinggi yang tidak hanya ditentukan oleh hasil, tetapi juga oleh setiap </span>
                        <b style={{ color: 'yellow' }}>langkah</b>
                        <span> dan proses yang telah kita jalani.</span>
                    </div>
                        
                    <div className="paragraph">
                        <b style={{ color: 'yellow' }}>Arshikara</b>
                        <span> mengajak kita untuk menghargai kenangan dan pencapaian</span>
                        <b style={{ color: 'yellow' }}> masa lalu</b>
                        <span> sebagai cahaya yang menerangi jalan menuju masa depan. Kita juga mengingat bahwa setiap</span>
                        <b style={{ color: 'yellow' }}></b>
                        <span> tantangan yang telah dihadapi membawa kita lebih dekat ke</span>
                        <b style={{ color: 'yellow' }}>puncak,</b>
                        <span> sambil terus membangun karakter dan kebajikan dalam setiap langkah yang diambil.</span>
                    </div>      
                </>,
            animateAOS: 'fade-right',
        },
        {
            type: 'image',
            source: '/assets/img/title.png',
            alt: 'logo',
            animateAOS: 'fade-left',
        },
        {
            type: 'text',
            title: 'the Logo Like',
            className: 'unknown',
            content: (
                <>
                    <div className="paragraph">

                        <span>Logo Garsafa 8 - </span>
                        <span style={{ color: 'yellow' }}> Arshikara </span>
                        <span>menggambarkan </span>
                        
                        <b style={{ color: 'yellow' }}> semangat keberanian</b>
                        <span>, transformasi, dan perjalanan menuju  </span>
                        <b style={{ color: 'yellow' }}>puncak kejayaan.</b>
                        <span> Sosok burung phoenix melambangkan kekuatan, pembaruan, 
                            dan tekad untuk menghadapi setiap tantangan sepanjang perjalanan.
                             Warna ungu dan emas mencerminkan kemuliaan, ambisi, dan optimisme
                             , sementara lingkaran emas merepresentasikan harmoni dan kesempurnaan.
                        </span>
                    </div>
                    <div className="paragraph">
                        <span>Elemen api pada phoenix menjadi simbol dari proses penuh perjuangan, yang mengingatkan bahwa setiap </span>
                        <b style={{ color: 'yellow' }}>langkah</b>
                        <span> adalah bagian penting dalam mencapai</span>
                        <b style={{ color: 'yellow' }}> puncak tertinggi.</b>
                        <span>  Secara keseluruhan, logo ini menegaskan nilai 
                            perjalanan yang penuh makna dan pentingnya keberanian untuk terus
                        </span>
                        <b style={{ color: 'yellow' }}> maju menuju kejayaan.</b>
                    </div>
                </>
            ),
            animateAOS: 'fade-left',
        },
        {
            type: 'image',
            source: '/assets/img/log_grsf.png',
            alt: 'logo Arsikhara',
            animateAOS: 'fade-right',
        },
        {
            type: 'text',
            title: '𝐏𝐡𝐲𝐫𝐨',
            className: 'unknown',
            content: 
            (
                <div className="paragraph">
                    <b style={{ color: 'yellow' }}>𝐏𝐡𝐲𝐫𝐨</b> merupakan nama yang menggabungkan elemen kekuatan, energi, dan pembaruan. Terinspirasi dari kata
                    <b style={{ color: 'yellow' }}> '𝐏h𝐲𝐫𝐨'  </b>
                    (api), nama ini melambangkan keberanian, dan tekad untuk menghadapi tantangan. Api dalam konteks ini juga merepresentasikan transformasi dan pembaruan, seperti proses membakar sesuatu untuk menciptakan hal yang lebih baik.
                    <b style={{ color: 'yellow' }}> 𝐏𝐡𝐲𝐫𝐨</b> adalah simbol perubahan positif, membawa pesan keberanian untuk terus maju dan berinovasi.
                </div>
              ),
            animateAOS: 'fade-right',
            quest: 'Who'
        },
        {
            type: 'image',
            source: '/assets/logo/manuk.png',
            alt: 'maskot',
            animateAOS: 'fade-left',
        },
    ];

    const groupedData = [];
    for (let i = 0; i < aboutData.length; i += 2) {
        groupedData.push(aboutData.slice(i, i + 2));
    }

    return (
        <section className="about" id="about">
            <div className="row">
                <AboutText
                    title={mainData.title}
                    content={mainData.content}
                    className={mainData.className}
                    animateAOS={mainData.animateAOS}
                />
                {groupedData.map((group, groupIndex) => (
                    <div className="aboutComp" key={groupIndex}>
                        {group.map((item, index) => {
                            if (item.type === 'text') {
                                return (
                                    <AboutText
                                        key={`${groupIndex}-${index}`}
                                        title={item.title}
                                        content={item.content}
                                        className={item.className}
                                        animateAOS={item.animateAOS}
                                        quest={item.quest}
                                    />
                                );
                            } else if (item.type === 'image') {
                                return (
                                    item.source ?
                                    <AboutImg
                                        key={`${groupIndex}-${index}`}
                                        className={item.className}
                                        source={item.source}
                                        description={item.alt}
                                        animateAOS={item.animateAOS}
                                        id={(groupIndex %2 == 0 ? 'Gkiri' : 'Gkanan')}
                                    />
                                    :
                                    <Skeleton /> 
                                );
                            }
                            return null;
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
}
