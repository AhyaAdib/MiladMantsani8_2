import '../styles/milad6.css'

export default function Header()
{
    
    const toggleMenu = () => {
        const menuToggle = document.querySelector('.menuToggle')
        const navigation = document.querySelector('.navigation')
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header')
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    return (
        <>
        <header id="hidehead">
            <a href="#" className="logo"><img src="/assets/img/title.png" href="/" onClick={toggleMenu} height="36px"/></a>
            <div className="menuToggle" onClick={toggleMenu}></div>
            <ul className="navigation">
                <li><a href="/#banner" onClick={toggleMenu}>
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                    </svg>

                    <span> Home</span> 
                </a></li>
                <li><a href="/#about" onClick={toggleMenu}>
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                    <span> About</span>
                
                </a></li>
                <li><a href="/#lomba" onClick={toggleMenu}>
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                    </svg>
                    <span> Event</span>
                
                </a></li>
                <li><a href="/#faq" onClick={toggleMenu}>
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <span> FAQ</span>
                </a></li>
            </ul>
        </header>
        </>
    )
}