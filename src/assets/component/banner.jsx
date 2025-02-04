import '../styles/milad6.css'
import React, { useRef } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BGVideo ()
{
    const videoRef = useRef(null);

    return (
        <div className="BGImg">
            {<div className="bgImageContent"/> || <Skeleton /> }
                
            {/* <video ref={videoRef} autoPlay muted loop preload="none">
                <source src="/assets/video/coverBG.mp4" type='video/mp4' />
                </video> 
                </div> */}
        </div>
    )
}

export default function Banner()
{
    return (
        <>
            <section className="banner" id="banner">
                <div className="content">
                    <BGVideo />
                    <div className="bannerContainer">

                        <div className="img animBanner">  </div>
                        <div className="containerPrev animBanner">
                            <p className='animBanner'>ARSIKHARA - Menuju Kejayaan</p>
                            <button className='Btn MainBtn animBanner'
                                onClick={() => document.getElementById('lomba').scrollIntoView({ behavior: 'smooth' })}
                            >Lihat <em>Event</em></button>
                            <button 
                                className="Btn animBanner"
                                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            >Apa itu Garsafa?</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}