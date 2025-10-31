import Spline from "@splinetool/react-spline";
import { SiReaddotcv } from "react-icons/si";

const Hero = () => {
  return (
    <main
      id="home"
      className=" h-screen flex  flex-col lg:flex-row items-center justify-between min-h-[calc(90hv-6rem)]"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-5"
       >
        <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Hey! It's Ahmed Rashwan
        </h1>
        <p className="text-base  sm:text-lg tracking-wider text-gray-400 max-w-100 lg:max-w-120">
          🚀 Frontend Engineer (React.js | Next.js)
        </p>
        <div className="flex gap-4 mt-8">
          <a
            className=" flex items-center gap-2  border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="https://drive.google.com/file/d/1WrV_O_4GSnrUWoACjSb1cGj0gY64IZv5/view?usp=drive_link"
          >
            <span>
              <SiReaddotcv />
            </span>{" "}
            MY Resums
          </a>
          <a
            className=" border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/**3D robot */}
{/**
 * 
 * 
 */}
       <Spline
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="300"
         data-aos-offset="0"
         data-aos-duration="3000"
         className=" absolute lg:top-[-30%] xl:top-[-15%] top-[-20%] bottom-0 lg:left-[25%]  sm:left-[-2%] h-full"
         scene="https://prod.spline.design/Lcdc2t9KlMMxlbCX/scene.splinecode"
       />
    </main>
  );
};

export default Hero;
