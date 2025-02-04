/* eslint-disable react/prop-types */
import '../styles/milad6.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from 'react';


function FAQContent ({Quest, Ans}){
    useEffect (() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <details data-aos={'fade-left'}>
            <summary>{Quest}</summary>
            <div className="jawab">
                {Ans}
            </div>
        </details>
    )
}

export default function FAQ()
{
    const FAQData = [
        {
            question: 'Bagaimana alur pendaftaran nya?',
            answer: 'Pendaftaran bisa dilaksanakan online. Klik ikon lomba, dan mengisi formulir yang telah disediakan.',
        },
        {
            question: 'Apakah ada syarat khusus untuk jenjang yang mengikuti?',
            answer: 'Tidak ada kok! kami bebaskan kelas 7, 8 dan 9 boleh ikut mendaftar.',
        },
        {
            question: 'Apakah boleh mengikuti lebih dari 1 lomba?',
            answer: 'Boleh banget dong! asalkan perhatikan timeline agar tidak bertabrakan, ya.',
        },
        {
            question: 'Bagaimana kejelasan kartu pelajar pada formulis pendaftaran?',
            answer: 'Kartu pelajar digunakan sebagai identitas, apabila tidak memiliki, boleh memakai surat keterangan siswa dari Tata Usaha sekolah masing masing.',
        },
        {
            question: 'Bagaimana cara mendapatkan informasi lebih lanjut?',
            answer: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    Stay tune di web 
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'rgb(121, 67, 0)', textUnderlineOffset: '3px',}}>
                        <svg className="w-[41px] h-[41px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>

                        <span>miladmantsani8.com</span>
                    </a>
                    dan instagram
                    <a href="https://www.youtube.com/@garvimantsaniartoffame3" style={{ display: 'inline-flex', textUnderlineOffset: '3px', alignItems: 'center', gap: '5px', color: 'rgb(121, 67, 0)' }}>
                        <svg className="w-[42px] h-[42px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                        <span>@garvimantsaniartoffame3</span>
                    </a> yaa!
                </span>
            ),
            
            
        },

    ]
    return (
        <>
            <section id="faq">
                <h1>Frequently Asked Questions</h1>
                {FAQData.map((item, index) => (
                    <FAQContent 
                        key={index}
                        Quest={item.question}
                        Ans={item.answer}
                    />
                ))}
            </section>
        </>
    )
}