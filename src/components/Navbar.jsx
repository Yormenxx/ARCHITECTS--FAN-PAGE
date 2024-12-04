import {useState,useEffect} from "react"
import logo from "../assets/images/logo.jfif"
import { LINK } from "../constants"
import {X , Menu} from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {

    useEffect(()=>{
        AOS.init({duration:1000})
    })



    const [toggle, setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <>
    
    <header id="home">
        <nav className="w-full px-2 py-3 " data-aos="fade-up">

            <div className="flex justify-evenly items-center px-7">

                    
                <div>
                    <img src={logo} width={100} height={60} alt="" />
                </div>



                <ul className="hidden lg:flex  ml-14 space-x-12">
                    
                        {
                            LINK.map((link,key)=>(
                                <li  key={key}>
                                    <a href={link.link} className="text-lg capitalize font-semibold hover:opacity-80 duration-150 ease-in-out">{link.name}</a>
                                </li>
                            ))
                        }
                       
                </ul>

                <div>
                    <button onClick={handleToggle} className="lg:hidden md:flex flex-col justify-end">
                        
                        {toggle ? <X/> :  <Menu/> }

                    </button>
                </div>


            </div>


            {
                toggle && (
                    <div className="w-full fixed  lg:hidden bg-white ">

                        <ul className="flex flex-col items-center justify-center space-y-4">
                                            
                              {
                                         LINK.map((link,key)=>(
                                             <li  key={key}>
                                                <a href={link.link} className="text-lg capitalize font-semibold">{link.name}</a>
                                             </li>
                                        ))
                              }
                                        
                                    </ul>

                    </div>
                )
            }


        </nav>
    </header>
    
    </>
  )
}

export default Navbar