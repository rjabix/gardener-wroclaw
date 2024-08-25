import React, {forwardRef, useRef, useState} from "react";
import {FaInbox, FaMap, FaPhone} from "react-icons/fa6";

const Contact = forwardRef((props, ref) => {
    const [IsShown, setIsShown] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;
        console.log(name, email, phone, message);
    }

    return (
        <>
            <div ref={ref} className='mt-12 bg-[#244030] rounded-3xl p-10 w-[80%] mx-auto relative overflow-clip'
                 data-aos='fade-up'>
                <img src='/back_contact_1.svg' alt='back' className='shape'/>
                <img src='/back_contact_2.svg' alt='back' className='shape'
                     style={{top: "auto", left: "auto", bottom: "0%", right: "0%"}}/>
                {!IsShown ? (
                        <div className='flex justify-center items-center flex-col text-white z-10'>
                            <h2 className='text-subtitle' style={{color: '#e0a423'}}>Get In Touch</h2>
                            <h2 className='md:text-5xl text-3xl'>Contact us today to shape <br/> an impressive design</h2>
                            <button onClick={() => setIsShown(true)}
                                    className='primary-button hover:bg-[#e0a423] transition-colors duration-300'>
                                Contact Us
                            </button>
                        </div>
                    )
                    : //show the contact page
                    (
                        <div>
                            <h2 className='text-subtitle mx-auto' style={{color: '#e0a423'}}>Get In Touch</h2>
                            <h2 className='md:text-5xl text-3xl text-white'>Contact us today to shape <br/> an
                                impressive design</h2>
                            <div className='md:flex md:justify-between items-center z-10 text-white'>
                                <div className='mx-auto flex flex-col space-y-5 text-white mt-10'>

                                    <div className='rounded-xl border border-[#e0a423] p-4 flex items-center'>
                                        <FaPhone className='md:text-3xl text-lg text-[#e0a423]'/>
                                        <span className='ml-3 md:text-3xl text-lg'>+48 111 111 111</span>
                                    </div>

                                    <div className='rounded-xl border border-[#e0a423] p-4 flex items-center'>
                                        <FaPhone className='md:text-3xl text-lg text-[#e0a423]'/>
                                        <span className='ml-3 md:text-3xl text-lg'>+48 222 222 222</span>
                                    </div>

                                    <div className='rounded-xl border border-[#e0a423] p-4 flex items-center'>
                                        <FaPhone className='md:text-3xl text-lg text-[#e0a423]'/>
                                        <span className='ml-3 md:text-3xl text-lg'>+48 323 222 222</span>
                                    </div>

                                    <div className='rounded-xl border border-[#e0a423] p-4 flex items-center'>
                                        <FaInbox className='md:text-3xl text-lg text-[#e0a423]'/>
                                        { window.innerWidth > 500 ? (
                                        <span className='ml-4 md:text-2xl text-lg'>gardener.wroclaw@ogrodnik.pl</span>
                                        ) : (
                                            <span className='ml-4 md:text-2xl text-lg'>gardener.wroclaw@<br/>ogrodnik.pl</span>
                                        )
                                        }
                                    </div>

                                    <div className='rounded-xl border border-[#e0a423] p-4 flex items-center'>
                                        <FaMap className='md:text-3xl text-lg text-[#e0a423]'/>
                                        <span className='ml-3 md:text-3xl text-lg'>Ogrodników, 46, Wrocław</span>
                                    </div>
                                </div>

                                <div className='mx-auto mt-10 items-center align-middle'>
                                    <form className='flex flex-col space-y-5'>
                                        <input type='text' placeholder='Your Name' ref={nameRef}
                                               className='bg-transparent border rounded-xl border-[#e0a423] h-10 p-3'/>
                                        <input type='email' placeholder='Your Email' ref={emailRef}
                                               className='bg-transparent border rounded-xl border-[#e0a423] h-10 p-3'/>
                                        <input type='tel' placeholder='Your Phone Number' ref={phoneRef}
                                               className='bg-transparent border rounded-xl border-[#e0a423] h-10 p-3'/>
                                        <textarea placeholder='Your Message' ref={messageRef}
                                                  className='bg-transparent border rounded-xl border-[#e0a423] p-3'/>
                                        <button type='submit' onClick={handleSubmit}
                                                className='primary-button hover:bg-[#e0a423] transition-colors duration-300 mx-auto min-h-3'>Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
            </div>

            {/* tiktok and other links */}
            <div>

            </div>

        </>
    );
});

export default Contact;