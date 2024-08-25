import {forwardRef} from "react";
import './AboutUs.css';
import './Services.css';

const AboutUs = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='section'>
            <img src="/back2.svg" alt='back' loading="lazy" className="shape _02"/>
            <div className='content'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 overflow-clip'>
                    <div className='items-center'>
                        <div className='text-subtitle green text-left' data-aos='fade-up'>O NAS</div>
                        <h2 className='text-left text-6xl' data-aos='fade-up' data-aos-delay='300'>Piękny ogród to <br/> dzieło <span className='text-[#e0a423]'>Sztuki</span>.</h2>
                        <p className='paragraph text-left font-sans md:pl-3 md:border-l md:border-[#244030]/50' data-aos='fade-right' data-aos-delay='900' data-aos-duration='1000'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere accumsan urna, sit amet tempor ante venenatis sed. Phasellus non semper justo. Quisque turpis tortor, dignissim sit amet bibendum id, bibendum quis metus. Phasellus malesuada lectus elit, eu interdum lorem egestas sit amet. Suspendisse vitae fermentum ipsum, ac sagittis tortor. Nunc ullamcorper magna et urna vulputate, quis vehicula diam egestas. Duis finibus tortor sit amet nibh feugiat aliquam.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut in dui facilisis ante viverra cursus nec a augue. Duis in arcu nec leo luctus ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed risus dui, feugiat id erat id, aliquam semper enim. Nulla fringilla, nisi sit amet interdum rutrum, nibh sem luctus nisi, id ultrices metus sem a quam. Phasellus maximus lectus ante, id interdum leo ornare in. Donec orci ex, commodo nec risus sit amet, dignissim ultricies justo. Fusce ut tincidunt odio. Mauris tempor purus at convallis porttitor. Integer ut malesuada nulla. Integer porttitor eget leo ac pulvinar.</p>
                    </div>
                    <img src='/about-us-hero.webp' alt='about-us-img' className='w-full h-full object-cover rounded-xl'
                    data-aos='fade-left' data-aos-delay='600'/>
                </div>
            </div>
        </div>
    );
});

export default AboutUs;