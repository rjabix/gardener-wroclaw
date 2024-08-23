import React from 'react';
import './Hero.css';
import 'aos/dist/aos.css';

export default function Hero() {

    return (
        <div className='hero-section'>
            <div className='block-home-hero'>
                <div className='w-full max-w-[1200px]'>
                    <div className='text-subtitle' data-aos='fade-up' >INSTANT. SIMPLE. SMART</div>
                    <h1 className='heading-hero block font-bold'
                        data-aos='fade-up' data-aos-delay='300'>Landscaping & smart green solutions</h1>
                    <div className='_2-button-block'>
                        <button onClick={() => {document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}}
                           className='tertiary-button hover:bg-white hover:text-black transition-colors duration-300'
                           data-aos='fade-up' data-aos-delay='600'>
                            About Us</button>
                        <div className='w-10'/>
                        <button onClick={() => {document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}}
                        className='primary-button hover:bg-[#e0a423]'
                        data-aos='fade-up' data-aos-delay='600'>
                            Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}