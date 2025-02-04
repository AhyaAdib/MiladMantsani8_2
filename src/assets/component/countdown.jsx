import React, { useState, useEffect } from 'react';
import '../styles/countdown.css';

export default function Countdown() {
    const timelines = [
        '2 Feb 2025',
    ]; // Array jadwal tanggal
    const [hari, setHari] = useState(0);
    const [jam, setJam] = useState(0);
    const [menit, setMenit] = useState(0);
    const [detik, setDetik] = useState(0);

    // Pilih jadwal ke-3 (index 2)
    const selectedDate = timelines[0];

    useEffect(() => {
        const targetDate = new Date(selectedDate);

        const interval = setInterval(() => {
            const now = new Date();
            const totalSeconds = Math.floor((targetDate - now) / 1000);

            if (totalSeconds > 0) {
                setHari(formatTime(Math.floor(totalSeconds / 3600 / 24)));
                setJam(formatTime(Math.floor(totalSeconds / 3600) % 24));
                setMenit(formatTime(Math.floor(totalSeconds / 60) % 60));
                setDetik(formatTime(totalSeconds % 60));
            } else {
                setHari("00");
                setJam("00");
                setMenit("00");
                setDetik("00");
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedDate]);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className="CContainer">
            <h1 className='titleContent' style={{display: 'inline-flex', alignItems: 'center', gap: '15px'}}>
                <svg style={{transform: 'scale(1.5)', fontWeight: '800'}} className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>


                 Hitung Mundur Pekan Milad
                </h1>
            {/* <p>Jadwal ke-3: {selectedDate}</p> */}
            <div className="CValues">
                <div className="CValue">
                    <p className="bigText">{hari}</p>
                    <span className="bigText">Hari</span>
                </div>
                <span className="bigText">:</span>
                <div className="CValue">
                    <p className="bigText">{jam}</p>
                    <span className="bigText">Jam</span>
                </div>
                <span className="bigText">:</span>
                <div className="CValue">
                    <p className="bigText">{menit}</p>
                    <span className="bigText">Menit</span>
                </div>
                <span className="bigText">:</span>
                <div className="CValue">
                    <p className="bigText">{detik}</p>
                    <span className="bigText">Detik</span>
                </div>
            </div>
        </div>
    );
}
