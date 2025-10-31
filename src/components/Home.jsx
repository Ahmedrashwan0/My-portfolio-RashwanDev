import Gradient from "../../public/gradient.png";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect } from "react";
import Aos from "aos";
import Loading from "./Loading";


const Header = lazy(()=>import("./Header"));
const Hero = lazy(()=>import("./Hero"));
const About = lazy(()=>import("./About"));
const Skills = lazy(()=>import("./Skills"));
const Projects = lazy(()=>import("./Projects"));
const Contact = lazy(()=>import("./Contact"));
const Footer = lazy(()=>import("./Footer"));
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <Suspense fallback={<Loading/>}> <Header /> </Suspense> 
      <img
        className=" absolute top-0 right-0 opacity-60 -z-1"
        src={Gradient}
        alt="Gradient-img"
      />
      <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#f54900] -rotate-30 -z-10"></div>

      <main>
       <Suspense > <Hero /> </Suspense> 
       <Suspense>  <About /> </Suspense> 
       <Suspense>  <Skills /> </Suspense> 
       <Suspense>  <Projects /> </Suspense> 
       <Suspense>  <Contact /> </Suspense> 
      </main>
      <Suspense>  <Footer /> </Suspense> 
      
    </div>
  );
};

export default Home;
