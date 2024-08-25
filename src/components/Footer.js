import { FaTiktok, FaInstagram } from "react-icons/fa6";
function Footer({scrollToServices, scrollToProjects, scrollToAbout, scrollToContact}) {
    return (
        <footer className="text-white pb-9 pt-20 px-12 mt-12 bg-gradient-to-b from-transparent to-30% to-[#244030]">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                <div className="mb-6 md:mb-0 mx-auto md:mx-0">
                    <h5 className="text-xl font-[Tetilium-Web] tracking-wider">GARDENER</h5>
                    <nav className="mt-4 text-center">
                        <button onClick={scrollToAbout} className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white">O NAS</button>
                        <button onClick={scrollToServices} className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white">USŁUGI</button>
                        <button onClick={scrollToProjects} className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white">PROJEKTY</button>
                        <button onClick={scrollToContact} className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white">KONTAKT</button>
                    </nav>
                </div>
                <div>
                    <h5 className="font-semibold text-xl">Follow Us</h5>
                    <div className="flex mt-4">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
                            <FaTiktok className="w-6 h-6 hover:text-white"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
                            <FaInstagram className="w-6 h-6 hover:text-white"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
