import { BsHeartPulse } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:miguel64949@gmail.com?subject=Mensaje%20de%20Contacto&body=Nombre:%20${name}%0AEmail:%20${email}%0AMensaje:%20${message}`;
    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div id="contact" className="py-16 lg:section ">
      <section className="container mx-auto">
        <article className="flex flex-col lg:flex-row ">
          <motion.aside
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h3 className="flex text-[1.5rem] uppercase text-accent font-bold mb-2 tracking-wide font-primary">
                Ponte en contacto conmigo{" "}
                <p>
                  <BsHeartPulse size={20} color="pink" />
                </p>
              </h3>
              <h2 className="text-[2.81rem] lg:text-[5.1rem] leading-none mb-12 font-primary ">
                Trabajemos <br /> juntos!!!
              </h2>
            </div>
          </motion.aside>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-8 pb-12 shadow-2xl ite"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all  transform-gpu hover:scale-105"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all  transform-gpu hover:scale-105"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all  transform-gpu hover:scale-105 "
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg mt-10 transform transition-all duration-200 hover:-translate-y-1 focus:outline-none"
            >
              Send Messages
            </button>
          </motion.form>
        </article>
      </section>
    </div>
  );
};

export default Contact;
