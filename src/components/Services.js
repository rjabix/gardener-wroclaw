import React, {forwardRef} from 'react';
import './Services.css';

const Services = forwardRef((props, ref) => {
    return (
        <div id='services' ref={ref} className='section'>
            <img alt='back' src="/back1.svg" loading="lazy"
                 className="shape _01"/>
            <div className='content'>
                <div className='services-block'>
                    <div className='heading-block items-center'>
                        <div className='heading-block-text'>
                            <div className='text-subtitle green' data-aos='fade-up'>LIDER W ARCHITEKTURZE KRAJOBRAZU</div>
                            <h2 className='heading h2' data-aos='fade-up' data-aos-delay='300'>Nasze Usługi</h2>
                        </div>
                        <p className='paragraph align-middle text-left my-auto font-sans' data-aos='fade-up'
                           data-aos-delay='600'>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    </div>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 shrink '
                         data-aos='fade-up' data-aos-delay='900' data-aos-duration='1000'>
                        <ServiceCard photo_url='/maintenance.svg'
                                     title="Konserwacja i pielęgnacja"
                                     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."/>
                        <ServiceCard photo_url='/tree.svg'
                                     title='Utrzymanie drzew'
                                     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."/>
                        <ServiceCard photo_url='/scissors.svg'
                                     title='Przycinanie i okrawanie'
                                     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."/>
                        <ServiceCard photo_url='/shovel.svg'
                                     title='Kształtowanie krajobrazu'
                                     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."/>
                        {/*to add more service cards if needed*/}
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Services;
const ServiceCard = ({photo_url, title, text}) => {
    return (
        <div
            className="service-card text-left hover:border-[#e0a423]">
            <div className="green mb-4 flex justify-center items-center w-full">
                <img src={photo_url} loading='lazy' alt={title} className="w-20 h-20"/>
                <span className='w-16'/>
                <h3 className="text-3xl font-bold text-green-800 list-title">{title}</h3>
            </div>
            <p className="text-gray-500 mt-2 font-sans">{text}</p>
        </div>
    );
};