import myImg from "../../public/my-img.jpeg";

const About = () => {
  return (
    <section id="about" className="  px-4 relative">
      <div className=" container mx-auto max-w-6xl">
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className=" text-3xl md:text-4xl font-bold mb-12 text-center "
        >
          About <span className="text-color">Me</span>
        </h1>
        <div className=" flex flex-col-reverse gap-5 lg:flex-row items-center justify-between ">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="mx-4"
          >
            <p className="sm:text-[20px] md:text-2xl  font-semibold my-2">
              👋 Hey, I'm Ahmed Rashwan!
            </p>
            <p>
              A passionate Frontend Engineer focused on building modern,
              scalable, and user-friendly web applications. I specialize in
              React.js, Next.js, and Tailwind CSS, crafting responsive UIs and
              seamless user experiences.
            </p>
            <br />
            <p>
              I love turning ideas into polished products that are fast,
              intuitive, and reliable. Let’s build impactful web experiences
              together—because the web is evolving, andI’m building for the
              future 🚀🔥
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className=" size-3/5 rounded-4xl m-auto" src={myImg} alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
