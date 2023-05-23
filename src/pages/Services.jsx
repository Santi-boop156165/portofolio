import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
import ui from "../../assets/img1.jpg";
import ui2 from "../../assets/img2.jpg";
import ui3 from "../../assets/img3.jpg";
export const Services = () => {
  return (
    <div id="services" className="section">
      <section className="container mx-auto">
        <section className="flex flex-col lg:flex-row gap-x-10 gap-y-10">
          <motion.article
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col  lg:mb-0"
          >
            <asidie className="flex-1 flex flex-col mb-6 ">
              <h2 className="leading-tight font-primary text-[2.0rem]  font-bold ">
                Mis Proyectos !!!!!!!!! <br />
              </h2>
              <p className="max-w-sm mb-16 font-primary text-app-primary-200">
                En este espacio, te invito a explorar la amplia gama de
                proyectos en los que he participado y desarrollado habilidades.
                Acompáñame en este viaje por el mundo del software y descubre
                las emocionantes experiencias que he tenido el privilegio de
                vivir.{" "}
              </p>

              <button className="btn btn-sm font-semibold transform transition-all duration-200 hover:-translate-y-1 focus:outline-none">
                Ven a conocer my github
              </button>
            </asidie>
            <aside className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={ui}
              />
              <div className="absolute -bottom-full left-11 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient font-primary text-[1.5rem]">
                  REACT/TAILWIND/NEXTJS
                </span>
              </div>
              <div className="absolute -bottom-full left-11 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Twitter Clon </span>
              </div>
            </aside>
          </motion.article>
          <motion.article
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col gap-y-12 md:gap-y-32 "
          >
            <aside className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={ui2}
              />
              <div className="absolute -bottom-full left-11 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient font-primary text-[1.5rem]">
                  DJANGO/REACT
                </span>
              </div>
              <div className="absolute -bottom-full left-11 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">API Crud Tareas </span>
              </div>
            </aside>
            <aside className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              <img
                className="group-hover:scale-125 transition-all  duration-500"
                src={ui3}
              />
              <div className="absolute -bottom-full left-11 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient font-primary text-[1.5rem]">
                  REACT/NEXTJS/MONGODB
                </span>
              </div>
              <div className="absolute -bottom-full left-11 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Netflix Clone </span>
              </div>
            </aside>
          </motion.article>
        </section>
      </section>
    </div>
  );
};
