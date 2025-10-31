import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { navItems } from "../data/data";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menu, setmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    addEventListener("scroll", handle);
    return () => removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={` sticky top-0 z-50 flex justify-between items-center py-4 px-4 lg:px-20 ${
        scrolled && "bg-black/75"
      }`}
    >
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" font-bold text-3xl md-text-2xl lg:text-3xl  m-0"
      >
        Rashwan Dev<span className="text-red-600">.</span>
      </h1>
      <nav className=" hidden md:flex items-center gap-12">
        {navItems.map((e, index) => (
          <a
            data-aos={e.aos}
            data-aos-easing={e.aosEasing}
            data-aos-duration={e.aosDuration}
            key={index}
            className=" text-base tracking-wide transition-colors hover:text-gray-300 z-50"
            href={e.href}
          >
            {e.text}
          </a>
        ))}
      </nav>
      <div className="flex gap-5">
        {[
          { icon: <FiGithub />, href: "https://github.com/Ahmedrashwan0" },
          {
            icon: <FiLinkedin />,
            href: "https://www.linkedin.com/in/ahmedrashwanrashad/",
          },
        ].map((e, index) => (
          <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            key={index}
            className=" text-2xl tracking-wide transition-colors hover:text-gray-300 z-50"
            href={e.href}
          >
            {e.icon}
          </a>
        ))}
        {/**mobile menu */}
        <button
          onClick={() => setmenu((open) => !open)}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" md:hidden cursor-pointer text-2xl z-50"
        >
          {menu ? <AiOutlineClose />:<IoMenu />}
        </button>
        {menu && (
          <div className=" fixed top-16 bottom-0 right-0 left-0 p-5 z-40 bg-black/50  backdrop-blur- ">
            <nav className="flex flex-col gap-6 items-center">
              {navItems.map((e, index) => (
                <a
                  onClick={() => setmenu(false)}
                  key={index}
                  className=" text-base tracking-wide transition-colors hover:text-gray-300 z-50"
                  href={e.href}
                >
                  {e.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
