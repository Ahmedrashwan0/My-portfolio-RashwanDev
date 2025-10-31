import { useForm } from "@formspree/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [state, handleSubmit] = useForm("xovpkpor");

  if (state.submitting) {
    setTimeout(() => {
      toast.success("Message Sent!", {
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        style: {
          width: "200px",
          height: "80px",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    }, 1500);
  }

  return (
    <section id="contact" className=" py-24 px-4 relative ">
      <div className=" container mx-auto max-w-5xl">
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In <span className=" text-color">Touch</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" text-center mb-12 max-w-2xl mx-auto"
        >
          Hava a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className=" order-2 md:order-1 space-x-8">
            <h3 className=" text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className=" space-y-6 justify-center">
              {[
                {
                  title: "Email",
                  text: "rashwanahmed620@gmail.com",
                  icon: <MdOutlineMail className=" size-6" />,
                  href: "mailto:rashwanahmed620@gmail.com",
                },

                {
                  title: "Phone",
                  text: "+2 01122185907",
                  icon: <FaPhoneAlt className=" size-6" />,
                  href: "tel:+201122185907",
                },

                {
                  title: "Lcation",
                  text: "Aswan,Egypt",
                  icon: <PiMapPinArea className=" size-6" />,
                },
              ].map((e, key) => (
                <div key={key} className="flex items-start space-x-4">
                  <div className=" p-3 rounded-full ">{e.icon}</div>
                  <div>
                    <h4 className=" font-medium">{e.title}</h4>
                    <a href={e.href}>{e.text}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <h4 className=" font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ahmedrashwanrashad/">
                  <FiLinkedin className=" size-6" />
                </a>
                <a href="https://www.instagram.com/rashwan817/?igsh=ZjdvcTQ3eWNpNGN5">
                  <FiInstagram className=" size-6" />
                </a>
                <a href="https://www.facebook.com/share/1AYsKwgBL6/">
                  <FaFacebook className=" size-6" />
                </a>
              </div>
            </div>
          </div>

          <div className=" order-1 md:order-2 bg-gray-700/60 p-8 rounded-lg shadow-xs ">
            <h3 className=" text-2xl font-semibold mb-1 text-center">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className=" container mx-auto space-y-4"
            >
              <div>
                <label
                  className=" block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name{" "}
                </label>
                <input
                  id="name"
                  autoComplete="off"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  required
                  className="w-full  px-4 py-3 rounded-md border-gray-400 bg-gray-950 focus:ring-2 focus:outline-hidden focus:ring-primary"
                  placeholder="name"
                />
              </div>

              <div>
                <label
                  className=" block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email{" "}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="w-full  px-4 py-3 rounded-md border-gray-400 bg-gray-950 focus:ring-2 focus:outline-hidden focus:ring-primary "
                  placeholder="email"
                />
              </div>

              <div>
                <label
                  className=" block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Numder{" "}
                </label>
                <input
                  id="email"
                  type="tel"
                  autoComplete="off"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                  className="w-full  px-4 py-3 rounded-md border-gray-400 bg-gray-950 focus:ring-2 focus:outline-hidden focus:ring-primary "
                  placeholder="Phone Numder"
                />
              </div>

              <div>
                <label
                  className=" block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                  className="w-full  px-4 py-3 rounded-md border-gray-400 bg-gray-950 resize-none focus:ring-2 focus:outline-hidden focus:ring-primary"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className={` w-full py-2 cursor-pointer flex rounded-full items-center justify-center gap-2  text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white`}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <LuSend className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
