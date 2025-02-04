import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../component/header";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import "../styles/comp.css";
import "../styles/milad6.css";
import Footer from "../component/footer";
// import Navbar from "../component/navbar";
import React from "react";
import Header from "../component/header";
import AOS from "aos";

const deadlines = [
    "27 Jan 2025", // OSSMA
    "1 Feb 2025", // MICO
    "31 Jan 2025", // MEDCO
    "15 Feb 2025", // IQRAMA
    "11 Feb 2025", // IQRAMA
    "12 Feb 2025", // MANTARA
    "10 Feb 2025", // Speco
    "10 Feb 2025", // Ashwatuna
    "15 Feb 2025", // Visco
    "12 Feb 2025", // MTMC
    "12 Feb 2025", // MBC
    "12 Feb 2025", // MCC
    "7 Feb 2025", // AP    
]

const Countdown = ({ index }) => {
    const [hari, setHari] = useState(0);
    const [jam, setJam] = useState(0);
    const [menit, setMenit] = useState(0);
    const [detik, setDetik] = useState(0);

    const selectedDeadline = deadlines[index] ? new Date(deadlines[index]) : null;

    useEffect(() => {
        if (!selectedDeadline) return;

            // Atur waktu ke 12:00 siang untuk OSSMA (index 0)
        // Atur waktu ke 12:00 siang untuk OSSMA (index 0)
        if (index === 0) {
            selectedDeadline.setHours(12, 0, 0, 0); // Jam 12:00 siang
        } else {
            selectedDeadline.setHours(24, 60, 60, 1000); // Jam 23:59:59 default
        }

        const interval = setInterval(() => {
            const now = new Date();
            const totalSeconds = Math.floor((selectedDeadline - now) / 1000);

            if (totalSeconds > 0) {
                setHari(formatTime(Math.floor(totalSeconds / 3600 / 24)));
                setJam(formatTime(Math.floor(totalSeconds / 3600) % 24));
                setMenit(formatTime(Math.floor(totalSeconds / 60) % 60));
                setDetik(formatTime(totalSeconds % 60));
            } else {
                clearInterval(interval);
                setHari("00");
                setJam("00");
                setMenit("00");
                setDetik("00");
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval
    }, [selectedDeadline]);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time.toString();
    }

    if (!selectedDeadline) {
        return <div>Invalid index</div>;
    }


    return (
        <div className="tag">
            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>

            {hari} Hari {jam} Jam {menit} Menit
        </div>
    );
};
function Result() {
    const finalisData = [
        {
            question: 'Bidang Matematika',
            // answer: 'Pendaftaran bisa dilaksanakan online. Klik ikon lomba, dan mengisi formulir yang telah disediakan.',
            finalis: [
                { NoUjian: 'M061', Nama: 'DEVANAND FALAH A.N.', Sekolah: 'MTsN 1 KEDIRI', Nilai: '83,33' },
                { NoUjian: 'M103', Nama: 'AHMAD NUR FAJRI SALSABILA', Sekolah: 'SMPN 1 NGADILUWIH', Nilai: '70' },
                { NoUjian: 'M113', Nama: 'ABDILLA AYUBIA FATIMAH', Sekolah: 'SMP ISLAM BAITUL \'IZZAH', Nilai: '70' },
                { NoUjian: 'M161', Nama: 'ALFIAN FERIZKY IRAWAN', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '70' },
                { NoUjian: 'M126', Nama: 'FAIZ ZULFAHMI NASRULLAH', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '70' },
                { NoUjian: 'M089', Nama: 'NAWIDA HILMIYA DZAKIYYA', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '66,67' },
                { NoUjian: 'M057', Nama: 'AMIRA ARIQAH PUTRI', Sekolah: 'SMPN 1 KOTA KEDIRI', Nilai: '66,67' },
                { NoUjian: 'M167', Nama: 'ARINA NAYLA HUSNA FIDDAROINI', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '66,67' },
                { NoUjian: 'M121', Nama: 'ELZAM AHMAD BILKAFI', Sekolah: 'MTsN 1 KOTA KEDIRI', Nilai: '63,33' },
                { NoUjian: 'M009', Nama: 'FIBAYT AL RASUL', Sekolah: 'MTsN 8 KEDIRI', Nilai: '63,33' },
                { NoUjian: 'M150', Nama: 'AISHA NAZIFA FAYI HASAN', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '63,33' },
                { NoUjian: 'M239', Nama: 'RASYA PUTRA AGASA', Sekolah: 'SMP PLUS RAHMAT KOTA KEDIRI', Nilai: '63,33' },
                { NoUjian: 'M172', Nama: 'MAULANA AUFAA ATSAAL Y L', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '60' },
                { NoUjian: 'M056', Nama: 'ALFIANO REALLY PUTRO ARYANTO', Sekolah: 'MTsN 6 KEDIRI', Nilai: '60' },
                { NoUjian: 'M034', Nama: 'AHMAD RAZAN ALAUDIN ALFARUQ', Sekolah: 'MTsN 8 KEDIRI', Nilai: '60' },
                { NoUjian: 'M028', Nama: 'ACHMAD GILANG KUSTYANTO', Sekolah: 'SMPN 1 GROGOL', Nilai: '60' },
                { NoUjian: 'M240', Nama: 'FADHIL PRATAMA KURNIAWAN', Sekolah: 'SMP PLUS RAHMAT KEDIRI', Nilai: '60' },
                { NoUjian: 'M082', Nama: 'RAKHA ATHAYA ARIANTO', Sekolah: 'SMP PLUS RAHMAT KEDIRI', Nilai: '60' },
                { NoUjian: 'M039', Nama: 'DEVON RICHARD HAFIDS F.P.', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '56,67' },
                { NoUjian: 'M024', Nama: 'NABILA AIRINA FAJRI', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '56,67' },
                { NoUjian: 'M046', Nama: 'AHMAD HIBATUL WAFI HUMAIDI', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '56,67' },
                { NoUjian: 'M125', Nama: 'SHAKIRA AZALEA ARNOLDI PUTRI', Sekolah: 'SMP PLUS RAHMAT KEDIRI', Nilai: '56,67' },
                { NoUjian: 'M215', Nama: 'MUHAMMAD GELSON FERNANDO', Sekolah: 'MTsN 2 KOTA KEDIRI', Nilai: '56,67' },
            ]
        },
        {
            question: 'Bidang IPA',
            // answer: 'Tidak ada kok! kami bebaskan kelas 7, 8 dan 9 boleh ikut mendaftar.',
            finalis: [
                { NoUjian: 'A198', Nama: 'Haidar Dzaky Putra Mundachir', Sekolah: 'SMP Islam Baitul Izzah Nganjuk', Nilai: '62.22' },
                { NoUjian: 'A106', Nama: 'Timothy Diamond Elshadai', Sekolah: 'SMP Negeri 1 Kediri', Nilai: '60' },
                { NoUjian: 'A136', Nama: 'Faiz Fadlur Rahman', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '57.78' },
                { NoUjian: 'A189', Nama: 'Mohamad Chrysta Natanael', Sekolah: 'MTsN 1 Kota Kediri', Nilai: '57.78' },
                { NoUjian: 'A303', Nama: 'Ken Lintang Azzahra Dewi', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '53.33' },
                { NoUjian: 'A124', Nama: 'Wildan Azka Firmansyah', Sekolah: 'MTsN 1 Kediri', Nilai: '48.89' },
                { NoUjian: 'A006', Nama: 'Anaya Sutra Rizqia N. I', Sekolah: 'MTsN 1 Kediri', Nilai: '48.89' },
                { NoUjian: 'A066', Nama: 'Ahsan Habib', Sekolah: 'MTsN 2 Kediri', Nilai: '46.67' },
                { NoUjian: 'A132', Nama: 'Binti Latifatul Fajriah', Sekolah: 'MTsN 2 Kediri', Nilai: '46.67' },
                { NoUjian: 'A384', Nama: 'Raditya Javas Nararya', Sekolah: 'MTsN 2 Kediri', Nilai: '46.67' },
                { NoUjian: 'A250', Nama: "Sa'iidatus Sakinah", Sekolah: 'MTsN 1 Blitar', Nilai: '46.67' },
                { NoUjian: 'A261', Nama: 'Ghaisani Filia Anandika', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '46.67' },
                { NoUjian: 'A122', Nama: 'Anniesa Rahma Chaerani', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '46.67' },
                { NoUjian: 'A154', Nama: 'Gendis Tadyavea Tsawabulkhair', Sekolah: 'MTsN 3 Nganjuk', Nilai: '44.44' },
                { NoUjian: 'A042', Nama: 'Narima Antika Dewi', Sekolah: 'MTsN 2 Kanigoro', Nilai: '44.44' },
                { NoUjian: 'A030', Nama: "Bilbilla Qur'anin Prasetya", Sekolah: 'MTsN 2 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A190', Nama: 'Danisha Ilyana Masrukhana', Sekolah: 'MTsN 3 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A011', Nama: 'Muhamad Azka Najhan', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A203', Nama: 'Nadya Salsabilla', Sekolah: 'SMPN 3 Peterongan', Nilai: '44.44' },
                { NoUjian: 'A052', Nama: 'Muhammad Gelson Fernando', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A033', Nama: 'Muhammad Aflah Bimantara', Sekolah: 'MTsN 1 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A077', Nama: 'Mebriano Nelson Setyawan', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A403', Nama: 'Shakira Azalea Arnoldi Putri', Sekolah: 'SMP Plus Rahmat Kota Kediri', Nilai: '44.44' },
                { NoUjian: 'A181', Nama: 'Imelvina Fatima Zehra', Sekolah: 'MTsN 3 Nganjuk', Nilai: '44.44' }
            ]
        },
        {
            question: 'Bidang IPS',
            // answer: 'Boleh banget dong! asalkan perhatikan timeline agar tidak bertabrakan, ya.',
            finalis: [
                { NoUjian: 'S023', Nama: 'M. Alvin Abdul Aziz', Sekolah: 'MTsN 8 Kediri', Nilai: '78.33' },
                { NoUjian: 'S032', Nama: 'Fakhri Syahru Hariono', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '78.33' },
                { NoUjian: 'S470', Nama: 'Felicia Kirana Prameswari', Sekolah: 'MTsN 6 Kediri', Nilai: '76.67' },
                { NoUjian: 'S332', Nama: 'Muhammad Yusuf Nur Fairuz A.M', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '76.67' },
                { NoUjian: 'S226', Nama: 'Muhammad Nugroho', Sekolah: 'SMP Negeri 1 Papar', Nilai: '76.67' },
                { NoUjian: 'S019', Nama: 'Muhammad Davin Rezqyano', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '76.67' },
                { NoUjian: 'S105', Nama: 'Shabiyya Khairani A.', Sekolah: 'MTsN 1 Kota Blitar', Nilai: '75' },
                { NoUjian: 'S079', Nama: 'Ashfa Alya', Sekolah: 'MTsN 6 Kediri', Nilai: '75' },
                { NoUjian: 'S037', Nama: 'Syifa Amelia Artanti', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '75' },
                { NoUjian: 'S487', Nama: 'M. Fachri Firmansyah', Sekolah: 'MTsN 1 Kota Kediri', Nilai: '75' },
                { NoUjian: 'S101', Nama: 'M. Azzam Avicena', Sekolah: 'MTsN 1 Kota Kediri', Nilai: '73.33' },
                { NoUjian: 'S123', Nama: 'Fairuzzea Irtiza Cayla', Sekolah: 'MTsN 2 Kota Blitar', Nilai: '73.33' },
                { NoUjian: 'S324', Nama: 'Aisya Sahda Salsabila', Sekolah: 'MTsN 1 Kediri', Nilai: '73.33' },
                { NoUjian: 'S069', Nama: 'Zianka Qolbi Udzma Islamiy', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '73.33' },
                { NoUjian: 'S313', Nama: 'Ibnu Sangi', Sekolah: 'MTs Nurul Ula', Nilai: '73.33' },
                { NoUjian: 'S172', Nama: 'Yasmine Alifhia Vhavha Anjany', Sekolah: 'MTsN 1 Blitar', Nilai: '73.33' },
                { NoUjian: 'S344', Nama: 'Muhammad Muqorrobin', Sekolah: 'SMP Plus Rahmat', Nilai: '73.33' },
                { NoUjian: 'S114', Nama: 'Syifa Ariani Putri', Sekolah: 'SMP Islam Baitul Izzah Nganjuk', Nilai: '73.33' },
                { NoUjian: 'S010', Nama: 'Muhammad Raihan Ardiansyah', Sekolah: 'MTsN 3 Nganjuk', Nilai: '71.67' },
                { NoUjian: 'S314', Nama: 'Rahayu Citra Lestari', Sekolah: 'MTsN 5 Kediri', Nilai: '71.67' },
                { NoUjian: 'S186', Nama: 'Salma Puji Rahayu', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '71.67' },
                { NoUjian: 'S380', Nama: 'Chalistya Putri', Sekolah: 'MTsN 2 Kediri', Nilai: '71.67' },
                { NoUjian: 'S247', Nama: 'Muhammad Abdurrahman Murdani', Sekolah: 'MTsN 2 Kota Kediri', Nilai: '71.67' },
                { NoUjian: 'S012', Nama: 'Dehana Arifatunnisa', Sekolah: 'MTsN 1 Kediri', Nilai: '71.67' },
                { NoUjian: 'S095', Nama: 'Gayatri Nastiti Dwi Hapsari', Sekolah: 'SMPIT Nurul Izzah', Nilai: '71.67' }
            ]
        },
    ];

    return (
        <section id="faq">
            <h1>Finalis</h1>
            {finalisData.map((item, index) => (
                <FinalisContent 
                    key={index}
                    Quest={item.question}
                    Ans={item.answer}
                    FinalisList={item.finalis || []}
                />
            ))}
        </section>
    );
}


function FinalisContent({ Quest, Ans, FinalisList }) {
    return (
        <details>
            <summary>{Quest}</summary>
            {FinalisList.map((item, index) => (
                <div key={index} style={{display: "flex"}}>
                    
                        <div key={index}> <hr/> {index +1}. {item.Nama}  
                        <br/> 
                            <div style={{color: 'rgb(73 73 73)', fontSize: '1rem'}}>Point: {item.Nilai} </div>
                            <div style={{color: 'rgb(73 73 73)', fontSize: '1rem'}}>Asal Sekolah: {item.Sekolah} </div>
                             
                        </div>
                    
                </div>
            ))}
        </details>
    );
}


// function FinalisContent({ Quest, Ans, FinalisList }) {
    
//     return (
//         <details>
//             <summary>{Quest}</summary>
//             {/* <div className="jawab">{Ans}</div> */}
//             {FinalisList.length > 0 && (
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
//                     <thead>
//                         <tr>
//                             <th style={{ padding: '8px', border: '1px solid #000' }}>Rank</th>
//                             <th style={{ padding: '8px', border: '1px solid #000' }}>No Ujian</th>
//                             <th style={{ padding: '8px', border: '1px solid #000' }}>Nama</th>
//                             <th style={{ padding: '8px', border: '1px solid #000' }}>Asal Sekolah</th>
//                             <th style={{ padding: '8px', border: '1px solid #000' }}>Nilai</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {FinalisList.map((finalis, index) => (
//                             <tr key={index} style={{margin: '10px'}}>
//                                 <td style={{ padding: '8px', border: '1px solid #000' }}>{index+1}</td>
//                                 <td style={{ padding: '8px', border: '1px solid #000' }}>{finalis.NoUjian}</td>
//                                 <td style={{ padding: '8px', border: '1px solid #000' }}>{finalis.Nama}</td>
//                                 <td style={{ padding: '8px', border: '1px solid #000' }}>{finalis.Sekolah}</td>
//                                 <td style={{ padding: '8px', border: '1px solid #000' }}>{finalis.Nilai}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </details>
//     );
// }




export default function CompetitionBranch() {
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
        } else {
            console.error("imageRef not found!");
        }

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy(); // Clean up the viewer instance.
            }
        };
    }, []);

    const handleImageClick = () => {
        if (viewerRef.current) {
            viewerRef.current.show();
        } else {
            console.error("viewerRef has not been initialized.");
        }
    };

    const { comp } = useParams();

    const compData = {
        ossma: {
            title: 'OSSMA',
            imgSrc: '/assets/flyer/FOssma.jpg',
            GBComp: 'https://drive.google.com/file/d/1qh5TknjM8aCbbOgrJ802tBudS3yDBWHy/view?usp=sharing',
            CP: 'https://wa.me/+6289687828501',
            result: 'https://msha.ke/ossma2025',
            Nama: 'Rania',
            jenis: 'Akademik',
            Pengumuman: 'finalis',
            resultPath: 'https://drive.google.com/file/d/1FmZcYahWxmFu938a_mXmh86ZeopzJauv/view?usp=sharing',
            Id: 1,
            content: 
            'OSSMA (Olympiad of Science, Social, Mathematics) merupakan event tahunan yang diselenggarakan dalam rangkaian Milad MAN 2 Kota Kediri. OSSMA sebelumnya bernama IESMO adalah Olimpiade Se-Jawa Timur yang menguji kemampuan peserta pada tiga bidang utama, yaitu: IPA, IPS, dan Matematika. Kompetisi ini dirancang untuk mengembangkan kemampuan literasi sains, sosial, dan matematika para peserta dengan mengintegrasikan berbagai konsep lintas bidang. Bagi para pemenang yang memenuhi kriteria tertentu, tersedia Golden Ticket Free Pass untuk masuk ke MAN 2 Kota Kediri.'
        },
        mico: {
            title: 'MICO',
            imgSrc: '/assets/flyer/FMico.png',
            GBComp: 'https://drive.google.com/file/d/1Ye49W7Br5re3vaM6651D4mwTP2mrLiwc/view?usp=sharing',
            CP: 'https://wa.me/+6285230502691 ',
            Nama: 'Aleta',
            jenis: 'Akademik',
            result: 'https://bit.ly/FormulirRegistrasiMICO2025',
            Id: 2,
            content:
            'MICO (Mantsani Scientific Research Competition) merupakan perlombaan Karya Tulis Ilmiah (KTI) dan Poster Ilmiah yang diselenggarakan untuk seluruh siswa/i SMP/MTs-sederajat yang ada di Provinsi Jawa Timur. Dengan nuansa baru, tahun ini kami mengusung tema "Transformasi SDGs : Senarai 2030 untuk Pembangunan Berkelanjutan Dunia Melalui Inovasi iGeneration." sebagai salah satu tujuan kami untuk menciptakan generasi muda yang kreatif dan inovatif untuk berkontribusi secara aktif dalam pembangunan berkelanjutan di dunia.',
        },
        medco: {
            title: 'MEDCO',
            imgSrc: '/assets/flyer/FMedco.png',
            GBComp: 'https://drive.google.com/file/d/1Kc2AmlPvczHEfARKYQMxwZidtFBzFvXQ/view?usp=sharing',
            CP: 'https:/wa.me/.+6289510030222',
            Nama: 'Irafa',
            jenis: 'Akademik',
            result: 'https://bit.ly/PendaftaranMedco_2025',
            Id: 3,
            content:
            'MEDCO (MAN 2 Kota Kediri Education Debate Competition ) adalah lomba debat yang diikuti oleh siswa/i SMP/MTs se-Provinsi Jawa Timur. Acara perlombaan tersebut pertama kali diadakan pada tahun 2023 sebagai salah satu bagian perlombaan dari Milad Mantsani #6. Sesuai dengan namanya, MEDCO ketiga yang dilaksanakan dalam rangka milad mantsani#8 mengangkat isu terkini mengenai pendidikan sebagai MOSI atau topik utama yang akan diperdebatkan. MEDCO menggunakan sistem debat parlemen asia, yaitu setiap tim beranggotakan 3 orang yang berasal dari instansi/sekolah yang sama. Pada MEDCO 2025 terdapat tahap online dan offline, 20 tim dengan nilai tertinggi di babak online akan mengikuti perlombaan offline yang akan dilaksanakan di MAN 2 Kota Kediri.',
        },
        iqrama: {
            title: 'IQRAMA',
            imgSrc: '/assets/flyer/FIqrama.png',
            GBComp: 'https://drive.google.com/file/d/10QKGwEGMOz-eM3CAaW9UbWlfNR56ykSR/view?usp=sharing',
            CP: 'https://wa.me/+6282233412027',
            Nama: 'Nasa',
            jenis: 'Seni',
            result: 'https://docs.google.com/forms/d/e/1FAIpQLSez9fyEG7oY6d5fdMBE7YChtbblHDIVhrgvahneOll4qhyKvg/viewform?usp=sharing',
            Id: 4,
            content:
            "IQRAMA adalah lomba MTQ antar-SMP/MTs se-Jawa Timur yang digelar pertama kali pada 2023. Lomba ini mengangkat nilai-nilai Al-Qur'an dan menggunakan sistem penilaian kepada masing² peserta lomba seperti makhraj, lagu dan penghayatan ayat.",
        },
        mafco: {
            title: 'MAFCO',
            imgSrc: '/assets/flyer/FMafco.png',
            GBComp: 'https://drive.google.com/file/d/1OIHekI4CHGlh5pF8IkW01m8oBoK6A6Tv/view?usp=sharing',
            CP: 'https://wa.me/+6281217629014',
            Nama: 'Naya',
            jenis: 'Seni',
            result: 'https://forms.gle/h1YZGMnW8n73S5dD8',
            Id: 5,
            content:
            'MAFCO (MAN 2 Kota Kediri  Kaligrafi Competition) adalah lomba kaligrafi yang diikuti oleh siswa/i SMP/MTs se-Jawa Timur. Acara perlombaan ini pertama kali diselenggarakan pada tahun 2025 sebagai bagian dari rangkaian Milad MAN 2 Kota Kediri yang ke-8.',
        },
        mantara: {
            title: 'MANTARA',
            imgSrc: '/assets/flyer/FMantara.png',
            GBComp: 'https://drive.google.com/file/d/1LDWRMJydcqC674byFbVz4qK6vXyRKfO_/view?usp=sharing',
            CP: 'https://wa.me/+6285546298956',
            Nama: 'Hassya',
            jenis: 'Seni',
            result: 'https://forms.gle/PGXE9JLRnFHHmYTq8',
            Id: 6,
            content:
            "MANTARA (MAN 2 Kota Kediri Toreh Tinta dan Rasa) adalah ajang cipta baca puisi SMP/MTs se-Jawa Timur, menggali makna ayat Al-Qur'an melalui ekspresi, keindahan bahasa, dan pesan spiritual penuh nilai kemanusiaan.",
        },
        speco: {
            title: 'SPECO',
            imgSrc: '/assets/flyer/FSpeco.png',
            GBComp: 'https://drive.google.com/file/d/1p6Jr_ugvCFoDxu-xO2O9AUO5rCcfC0ze/view?usp=sharing',
            CP: 'https://wa.me/+6285784056156',
            Nama: 'Nadya',
            jenis: 'Seni',
            result: 'https://forms.gle/jrgiSeU7rXiwWYei8',
            Id: 7,
            content:
            'SPECO 2025: Kompetisi pidato Bahasa Inggris untuk siswa MTs/SMP. Tema: "Digital Green Warrior" - Mengembangkan generasi muda berani bicara untuk keberlanjutan bangsa.',
        },
        ashwatuna: {
            title: 'ASHWATUNA',
            imgSrc: '/assets/flyer/FAshwatuna.jpg',
            GBComp: 'https://drive.google.com/file/d/15jjZDOEtoQQxnPT5mcCBhcjJ9G7Z97ci/view?usp=sharing',
            CP: 'https://wa.me/+6285791298723',
            Nama: 'Rizka',
            jenis: 'Seni',
            result: 'https://forms.gle/YQi1GuSVbAAxBp2h7',
            Id: 8,
            content:
            'ASHWATUNA 2025: Kompetisi pidato Bahasa Arab untuk siswa MTs/SMP. Tema: "Moderasi dalam beragama" - Mengembangkan generasi muda berani bicara untuk keberlanjutan bangsa.',
        },
        visco: {
            title: 'VISCO',
            imgSrc: '/assets/flyer/FVisco.png',
            GBComp: 'https://drive.google.com/file/d/14XzLKc7icOJWiVD13CR5K8-pqZ6d4Ckr/view?usp=sharing',
            CP: 'https://wa.me/+6285745967418',
            Nama: 'Gea',
            jenis: 'Seni',
            result: 'https://forms.gle/PxHH6o3Z92htf3cx9',
            Id: 9,
            content:
            'VISCO (Voice of Stars Competition) adalah kompetisi vokal MAN 2 Kota Kediri dalam rangka Milad Mantsani #8. Ajang ini mewadahi calon bintang dari SMP/MTs/sederajat di Jawa Timur untuk bersaing sehat, menunjukkan bakat terbaik, dan bersinar melalui aksi panggung inspiratif.',
        },
        mtmc: {
            title: 'MTMC',
            imgSrc: '/assets/flyer/FMtmc.png',
            GBComp: 'https://drive.google.com/file/d/19RR2H2oz5vIOJ2f4yBwXyfLTjK2HLe1d/view?usp=sharing',
            CP: 'https://wa.me/+628978117803 ',
            Nama: 'Kayla',
            result: 'https://forms.gle/Q9esYrVKUwRMcxA9A',
            jenis: 'Olahraga',
            Id: 10,
            content:
            'MTMC (MAN 2 Kota Kediri Tenis Meja Cup) merupakan kompetisi Tenis Meja resmi yang diselenggarakan oleh MAN 2 Kota Kediri pertama kali yaitu tahun 2025 ini. MTMC menjadi salah satu bagian perlombaan yg diselenggarakan dalam rangka memperingati milad MAN 2 Kota Kediri yang ke-8. Kompetisi ini terbuka bagi siswa-siswi SMP/MTs se-Jawa Timur dan bertujuan meningkatkan kemampuan, disiplin, dan sportivitas pelajar.',
        },
        mbc: {
            title: 'MBC',
            imgSrc: '/assets/flyer/FMbc.jpg',
            GBComp: 'https://drive.google.com/file/d/1zDUptJlQOBGDkclC85xs0q7ARP2fgFVj/view?usp=sharing',
            CP: 'https://wa.me/+6283151975852',
            Nama: 'Keyla',
            result: 'https://bit.ly/mantsanibadminton2025',
            jenis: 'Olahraga',
            Id: 11,
            content:
            'MBC (MAN 2 Kota Kediri Badminton Competition) adalah ajang pertandingan bulutangkis yang di selenggarakan oleh Mantsani Badminton Club dan di laksanakan di MAN 2 kota kediri dan diikuti oleh siswa/i SMP/Mts se-Jawa Timur. Acara perlombaan ini dibuat untuk menyambut Milad MAN 2 Kota Kediri yang ke 8# serta untuk mencari bibit bibit prestasi dalam olahraga bulutangkis.',
        },
        mcc: {
            title: 'MCC',
            imgSrc: '/assets/flyer/FMcc.png',
            GBComp: 'https://drive.google.com/file/d/1vrBzvmLlXQw3Q3FLIskIQ_e-NMh1xRRw/view?usp=sharing',
            CP: 'https://wa.me/+6288228055453',
            Nama: 'Nadia',
            jenis: 'Olahraga',
            result: 'https://docs.google.com/forms/d/e/1FAIpQLSc4glzrJt0bJAQDlFrRMDT6lzngAHQ9w5w3Z8kwRUFW1AkJlw/viewform?usp=sharing',
            Id: 12,
            content:
            'MCC (MAN 2 KOTA KEDIRI CHESS CHAMPIONSHIP adalah kompetisi catur yang diikuti oleh siswa/i SMP/MTs se-Jawa Timur. Turnamen ini perdana dan pertama kali diadakan pada tahun 2025 sebagai salah satu rangkaian perlombaan untuk memeriahkan Milad Man 2 Kota Kediri yang ke-8. Sesuai dengan tujuannya, MCC bertujuan untuk mengasah kemampuan berpikir strategi, meningkatkan sportivitas, dan menumbuhkan minat terhadap permainan catur di kalangan pelajar. Dalam MCC, setiap peserta akan bertanding secara individu, mewakili instansi atau sekolah masing-masing.',
        },
        aryaPraga: {
            title: 'ARYA PRAGA',
            imgSrc: '/assets/flyer/FAryaPraga.png',
            GBComp: 'https://drive.google.com/file/d/1RUJUxcVPQrQYscoJCCAqRZslfuwC6ej1/view?usp=sharing',
            CP: 'https://wa.me/+6281231829540',
            Nama: 'Alifa',
            jenis: 'Seni',
            result: 'https://forms.gle/AoP44kJwnvD4jfav9',
            Id: 13,
            content:
            'ARYA PRAGA (Ajang Berkarya Pramuka Penggalang) merupakan perlombaan bidang kepramukaan yang diselenggarakan oleh PRAMANDIGA Pramuka MAN 2 Kota Kediri untuk Pramuka tingkat penggalang se-Jawa Timur dengan 6 cabang mata lomba yaitu Yelfest, Pionering, SMS, Ranking 1, Videografi dan PPGD.',
        },
    }
    
    
    const data = compData[comp] || {
        title: "Kompetisi tidak ditemukan",
        imgSrc: "/assets/img/#",
        GBComp: "#",
        content: "Pastikan anda memiliki alamat URL yang sesuai",
    };

    return (
        <>
            <Header />
            <section className="Comp" id="Comp">
            {/* <Countdown /> */}
                <div className="rowComp">
                    <div className="what">
                        <div className="pamflet">
                            <img ref={imageRef}  id="image" onClick={handleImageClick} src={data.imgSrc} alt={data.title} />
                        </div>
                    </div>
                    <div className="what">
                        <h2 className="titleText titleTextComp"><span>{data.title}</span></h2>
                        <div className="tags">
                            <div className="tag">{data.jenis}</div>
                            {/* <div className="tag">
                                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>

                                {hari} Hari {jam} Jam {menit} Menit
                            </div> */}

                            <Countdown index={data.Id-1}/>
                        </div>

                        <p className="contentText paragraph">{data.content}</p>

                        
                        <div className="buttonCta">
                            <a className="linkStyle" href={data.Pengumuman ? data.resultPath : data.GBComp} >
                                <button className="CompBtn">
                                    <span>{data.Pengumuman ? "Surat Pengumuman" : "Juknis"}</span>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                                    </svg>


                                </button>
                            </a>

                            <a className="linkStyle linkStyleBG" href={data.Pengumuman ? "#faq" : data.result}>
                                <button className="CompBtn CompCta">
                                        <span>{data.Pengumuman ? "Daftar Finalis!" : "Daftar"}</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                </button>
                            </a>

                        </div>
                            <div className="CPSection">

                                <p className="desBtnComp">Contact Person</p>
                            <a className="linkStyle" href={data.CP}>
                                <button className="CompBtn">
                                <span>{data.Nama}</span>

                                <svg className="w-[43px] h-[43px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                                </svg>


                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Result />
            
            <Footer />
        </>
    );
}