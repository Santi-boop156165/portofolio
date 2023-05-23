
import { Link } from "react-scroll"
import ui from "../../assets/avatar.svg";
import gif from "../../assets/gif.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <article className="flex-1 text-center lg:text-left">
            <motion.img
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              src={gif}
              className="w-20  mb-10 mt-[100px] hidden lg:flex shadow-2xl rounded-full  mx-auto lg:mx-0 lg:w-40" />

            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-[3.5rem] font-bold leading-[1] lg:text-[6rem] mb-6 "
            >
              {" "}
              Hola Soy Santiago{" "}
            </motion.h1>
            <motion.section
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-app-primary-100 mb-12 text-[2rem] lg:text-[3.25rem] font-semibold leading-[1] "
            >
              <span className="mr-4 ">Y Soy</span>
              <TypeAnimation
                sequence={[
                  " Un futuro ingeniero de Software",
                  2000,
                  " Un desarrollador con habilidades de back y front",
                  2000,
                  "  Un apasionado por la tecnología",
                  2000,
                ]}
                speed={60}
                className="text-app-primary-800"
                wrapper="span"
                repeat={Infinity} />
            </motion.section>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-app-primary-100 text-xl mb-9 max-w-lg mx-auto lg:mx-0 font-primary"
            >
              Bienvenido a mi Single page de mi portafolio. aquí encontraras
              información sobre mi , mis proyectos y habilidades. me gusta mucho
              el desarrollo web y tambien el desarrollo back. me apaciona todo
              el tratamiento que sufren los datos por Debajo de la web. No
              dudes en ponerte en contacto conmigo si necesitas cualquier cosa ❤
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button  className="btn btn-lg font-primary">
                
                <Link to="contact">CONTACTA MEE!! ✔</Link> </button>
              <a className="text-gradient ml-4 text-xl font-primary ">DESCARGA CVV</a>
            </motion.div>
          </article>
          <motion.aside
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={ui} alt="" className="w-[400px] lg:mt-[250px]  " />
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Banner;
