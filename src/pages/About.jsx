/* eslint-disable react/jsx-key */
import { BsHeartFill } from "react-icons/bs";
import { services } from "../../data/services";
import { Link } from "react-scroll"
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
const About = () => {
  return (
    <div id="about" className="section">
      <section className="container mx-auto">
        <article className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          
          <h2 className="text-[3.5rem]  mb-6 text-gradient p-4 ">Experiencia</h2>
          
          <h3 className="max-w-[455px] mb-16 font-primary text-app-primary-200">Hola aqui les contare un poco sobre la experiencia que tengo como desarrollador Frontend y Backend</h3>
         
          <button className="btn btn-sm font-bold text-xl">
            <Link to="services">Mira mis Proyectos💜 </Link></button>
          
        </div>

       
          <div className="flex-1">

          <aside >
              {services.map((services,index)=>{
                  return(
                    <div className="border-b border-white/20 flex">
                    <article className="max-w-[400px]">
                      <motion.h3
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                       className="text-[1.35rem] tracking-wider font-bold mb-6 text-app-primary-100" key={index}>{services.name}</motion.h3>
                      <motion.p 
                      variants={fadeIn("left", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.8 }}
                      className="leading-tight mb-4 font-primary">{services.description}</motion.p>

                    </article>
                    <article>
                      <motion.p
                       variants={fadeIn("up", 0.3)}
                       initial="hidden"
                       whileInView={"show"}
                       viewport={{ once: false, amount: 0.8 }}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center" href="#">
                        <BsHeartFill />
                      </motion.p>
                    </article>
                    </div>
                  )
                  
              })}
          </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
