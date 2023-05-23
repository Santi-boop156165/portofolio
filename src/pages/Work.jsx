import { BsHeart } from "react-icons/bs"
import CarouselComponent from "../components/CarouselComponent"
import { carouselItems } from "../../data/carouselData"
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
const  Work = () => {

  return (
    <div id='work' className='section'>
        <section className="container mx-auto">
          <article className="flex flex-col lg:flex-row lg:items-center">
            <aside className="flex-1 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top ">
            </aside>
            <aside className="mt-8 flex-1">
              <motion.a
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-gradient text-[3.5rem] p-3 ">Conoceme un poco</motion.a>
              <motion.p 
                 variants={fadeIn("left", 0.4)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.8 }}
              className=" mt-3 text-[1.5rem] flex font-primary">Soy un desarrollador de software, y tengo miles de hobbies. entre ellos me apaciona mucho el deporte y soy un amante con locura de los autos 
              <span >
                <BsHeart color="pink"/>
                </span></motion.p>
                <motion.div
                 variants={fadeIn("up", 0.4)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.8 }}
                className="border bg-white bg-opacity-0 backdrop-blur-md transition-colors duration-500 mt-4 ">
                <CarouselComponent items={carouselItems} />
                </motion.div>
            </aside>
          </article>

        </section>
    </div>
  )
}

export default  Work