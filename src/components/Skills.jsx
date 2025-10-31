import { useState } from "react";
import { MySkills, Categorys } from "../data/data";

const Skills = () => {
  const [actCategory, setCategory] = useState("all");
  const filteredSkills = MySkills.filter(
    (skill) => actCategory === "all" || skill.category === actCategory
  );
  return (
    <section id="skills" className=" py-24 px-4 relative ">
      <div className=" container mx-auto max-w-5xl">
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-color">Skills</span>
        </h1>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="flex flex-wrap justify-center gap-4 mb-12 "
        >
          {Categorys.map((e, key) => (
            <button
              onClick={() => setCategory(e)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer capitalize${
                actCategory === e ? " bg-primary" : " hover:bg-orange-600"
              }`}
              key={key}
            >
              {e}
            </button>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-auto h-96 overflow-auto"
        >
          {filteredSkills.map((e, key) => (
            <div key={key} className="bg-gray-400 p-6 rounded-lg shadow-xs ">
              <div className=" text-left mb-4 ">
                <h3 className="flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl ">{e.icon}</span>
                  {e.name}
                </h3>
              </div>
              <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                <div
                  className=" bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: e.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm">{e.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
