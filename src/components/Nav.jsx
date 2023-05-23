import { Link } from "react-scroll"
import { BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboard2Data,BsBriefcase, BsChatSquareText} from "react-icons/bs"
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-9 w-full overflow-hidden z-50">
        <div className="container mx-auto">

            <div className="w-full bg-black/30 h-[100px] backrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-3xl text-white/80 items-center bg-opacity-0 backdrop-blur-md transition-colors duration-500"  >
                <Link offset={-200} spy={true} smooth={true} activeClass="active" to="home" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BiHomeAlt/>
                </Link>
                <Link spy={true} smooth={true} activeClass="active" to="about" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BiUser/>
                </Link>
                <Link spy={true} smooth={true} activeClass="active" to="services" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsClipboard2Data/>
                </Link>
                <Link spy={true}  smooth={true} activeClass="active" to="work" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsBriefcase/>
                </Link>
                <Link  spy={true} smooth={true} activeClass="active" to="contact" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsChatSquareText/>
                </Link>
            </div>

        </div>
    </nav>
  )
}

export default Nav