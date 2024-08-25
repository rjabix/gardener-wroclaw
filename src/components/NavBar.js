export default function NavBar({scrollToServices, scrollToProjects, scrollToAbout, scrollToContact}) {
    return (
        <nav className="rounded-3xl bg-[#244030] w-[80%] flex fixed top-4 left-0 right-0 mx-auto px-3.5 py-2 z-10">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <img
                        src="https://assets.website-files.com/62cbe7468074156bfe6471cd/632dc607ebc54213457aca47_Logo-light.svg"
                        alt="logo" className="" loading="lazy"/>
                    {/*<label className="text-white ml-3 font-semibold text-3xl">Gardener</label>*/}
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex justify-start items-center">
                        <NavLink text="O NAS" id="about" scrollToElement={scrollToAbout}/>
                        <NavLink text="USŁUGI" id="services" scrollToElement={scrollToServices}/>
                        <NavLink text="PROJEKTY" id="projects" scrollToElement={scrollToProjects}/>
                        <button
                            onClick={scrollToContact}
                            className="text-white font-semibold mx-5 bg-[#e0a423] rounded-xl px-7 py-3
                            hover:text-black hover:bg-white hover:transition-colors duration-300"
                            style={{letterSpacing: '0.1em'}}>
                            KONTAKT
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const NavLink = ({text, id, scrollToElement}) => {
    return (
        <button onClick={scrollToElement}
                className="text-white font-semibold mx-5 hover:text-[#e0a423] hover:transition-colors duration-300"
                style={{letterSpacing: '0.1em'}}>{text}</button>
    );

}