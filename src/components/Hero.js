import React from 'react';
import './Hero.css';
import 'aos/dist/aos.css';

export default function Hero({scrollToAbout, scrollToProjects}) {

    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = React.useCallback(() => {
        if(window.scrollY > 800) return;
        if (window.innerWidth > 768) {
            requestAnimationFrame(() => {
                setScrollPosition(window.scrollY);
            });
        }
        else{
            requestAnimationFrame(() => {
                setScrollPosition(0);
            });
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const style = {
        transform: `translateY(${-scrollPosition}px)`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className='hero-section' style={style}>
            <div className='block-home-hero'>
                <div className='w-full max-w-[1200px]'>
                    <div className='text-subtitle' data-aos='fade-up' >INSTANT. SIMPLE. SMART</div>
                    <h1 className='heading-hero block font-bold'
                        data-aos='fade-up' data-aos-delay='300'>Landscaping & smart green solutions</h1>
                    <div className='_2-button-block'>
                        <button onClick={scrollToAbout}
                           className='tertiary-button hover:bg-white hover:text-black transition-colors duration-300'
                           data-aos='fade-up' data-aos-delay='600'>
                            O NAS</button>
                        <div className='w-10'/>
                        <button onClick={scrollToProjects}
                        className='primary-button hover:bg-[#e0a423]'
                        data-aos='fade-up' data-aos-delay='600'>
                            PROJEKTY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}