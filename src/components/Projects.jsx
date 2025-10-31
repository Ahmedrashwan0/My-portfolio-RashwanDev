import { MyProjects } from "../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className=" container mx-auto max-w-5xl">
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-color">Projects </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of recent projects. Eech project was careflly crafed
          with attention to detail, performance, and user experience.
        </p>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black"
        >
          {MyProjects.map((e, key) => (
            <div
              key={key}
              className=" group bg-gray-400 rounded-lg overflow-hidden shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
              </div>
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl font-semibold m-1">{e.title}</h3>
                <div className="  bottom-10 m-3 flex justify-between items-center   ">
                  <div className="flex space-x-3">
                    <a href={e.demoUrl}>
                      <FaExternalLinkAlt className=" size-5" />
                    </a>
                    <a href={e.githubUrl}>
                      <FiGithub className=" size-5" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm my-3 mx-4">{e.description}</p>

              <div className=" px-3 py-1">
                <div className=" flex flex-wrap gap-2 mb-4">
                  {e.tags.map((tag, key) => (
                    <span
                      key={key}
                      className=" px-2 py-1 text-xs font-medium border rounded-full "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
