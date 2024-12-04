import architects from '../assets/images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Hero = () => {

    useEffect(()=>{
        AOS.init({duration:1000})
    })

  return (
    <section>

        <div>

            <div className='w-full p-4'data-aos="fade-up">
                <img src={architects} className='mx-auto' alt="" />
            </div>
{/* 
            <div className='w-full '>
                <p className='mx-auto text-center text-xl font-semibold max-w-3xl'>
                    Architects, es una banda britanica de metalcore-progresivo , la cuál se ha destacado por ser una de las más constante en el genero y el metalcore actual.
                </p>
            </div> */}
        </div>


    </section>
  )
}

export default Hero