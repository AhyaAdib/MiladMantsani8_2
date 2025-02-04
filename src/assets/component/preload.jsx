import '../scripts/preload'
import { useEffect } from 'react';
import '../styles/milad6.css';
import anime from 'animejs';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PreloadAnimation() {
    useEffect(() => {
        // Pastikan elemen ada sebelum menjalankan animasi
        const loadElements = document.querySelectorAll('.loadalla .word');
        const headerElements = document.querySelectorAll('#hidehead');
        if (loadElements.length > 0 || headerElements.length > 0) {
            // Anime.js timeline untuk animasi preload
            anime.timeline({ loop: false })
            .add({
                targets: '.loadalla .word', 
                scale: [3, 1], 
                opacity: [0, 1], 
                translateY: [-50, 0], 
                rotate: ['-15deg', '0deg'], 
                color: ['#ffaa00', '#ffffff'], 
                easing: "easeOutBack", 
                duration: 1200, 
                delay: (el, i) => 300 * i, 
            })
            .add({
                targets: '.loadalla .word', 
                rotate: ['0deg', '15deg'], 
                opacity: [1, 0], 
                scale: [1, 0.8], 
                translateY: [0, 100], 
                easing: "easeInExpo", 
                duration: 500, 
                delay: (el, i) => 50 * i, 
            })
            .add({
                targets: '#load', 
                // opacity: [1, 0], 
                translateY: [0, 1800], 
                easing: "easeOutExpo", 
                duration: 1400, 
            })
            .add({
                targets: '.animBanner', 
                opacity: [0, 1], 
                translateY: [100, -30], 
                easing: "easeOutExpo", 
                duration: 1200, 
                delay: (el, i) => 75 * i, 
            })
            // .add({
            //     targets: '#hidehead', 
            //     opacity: [0, 1], 
            //     translateY: [-100, 0], 
            //     easing: "easeOutExpo", 
            //     // duration: 700, 
            // })
            .add({
                targets: '.logo', 
                opacity: [0, 1], 
                translateY: [-100, 0], 
                rotate: ['-45deg', '0deg'], 
                easing: "easeOutExpo", 
            })
            .add({
                targets: '.navigation li', 
                opacity: [0, 1], 
                translateY: [-100, 0], 
                rotate: ['65deg', '0deg'], 
                easing: "easeOutExpo", 
                duration: 1000, 
                delay: (el, i) => 150 * i, 
            })
            
        } else {
            console.error('Target elements not found!');
        }
    }, []); // Hanya dijalankan sekali setelah komponen dirender

    return (
        <>
            <div id="load" className="ophid">
                <div className="loadalla">
                    {<img className="word" src="/assets/img/log_grsf.webp" width="250px" alt="logo" loading="lazy" />
                    || <Skeleton /> 
                    }
                    <br />
                    <span className="word">Garvi</span>
                    <span className="word">Mantsani</span>
                    <span className="word">Art</span>
                    <span className="word">Of</span>
                    <span className="word">Fame</span>
                </div>
            </div>
        </>
    );
}
