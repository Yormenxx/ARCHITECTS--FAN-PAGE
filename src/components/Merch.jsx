import Carousel from "./Carousel"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Merch = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
})

  return (
    <section id="merch" data-aos="fade-up">

    <Carousel/>

        
    </section>
  )
}

export default Merch