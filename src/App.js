import './App.css';
import NavBar from './components/NavBar';
import Hero from "./components/Hero";
import Services from "./components/Services";
import React, {useRef} from "react";

function App() {

    //refs and funcs for scrolling
    const ServicesRef = useRef(null);
    const ProjectsRef = useRef(null);
    const AboutRef = useRef(null);
    const ContactRef = useRef(null);

    const scrollToServices = () => ServicesRef.current?.scrollIntoView({behavior: 'smooth'});
    const scrollToProjects = () => ProjectsRef.current?.scrollIntoView({behavior: 'smooth'});
    const scrollToAbout = () => AboutRef.current?.scrollIntoView({behavior: 'smooth'});
    const scrollToContact = () => ContactRef.current?.scrollIntoView({behavior: 'smooth'});


    return (
        <div className="App">
            <NavBar scrollToServices={scrollToServices} scrollToContact={scrollToContact} scrollToAbout={scrollToAbout}
                    scrollToProjects={scrollToProjects}/>
            <Hero/>
            <Services ref={ServicesRef}/>
        </div>
    );
}

export default App;
