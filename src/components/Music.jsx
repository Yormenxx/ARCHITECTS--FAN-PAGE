import { Link } from "react-router-dom"
import { DISC } from "../constants"
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Music = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
})

    const  settings = {
     
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section className="text-white bg-[#111]" id="disc">

        <div>
            <h2 className=" pl-4 font-bold text-6xl capitalize py-10">Música</h2>
        </div>


        <div className="w-[90%] mx-auto">
            
        <Slider {...settings}>
            
            {
                DISC.map((item,key)=>(
                    <div key={ key }  >

                            <div className="my-6 flex flex-col items-start w-[300px] px-6" data-aos="fade-up">
                                <div >
                                    <img src={item.image} alt="img" className="w-[200px] md:w-[300px] rounded-xl  " />
                                </div>
                                <div >
                                    <h3 className="text-base md:text-xl leading-relaxed font-bold overflow-x-hidden">{item.title}</h3>
                                    <p className="text-sm leading-3 tracking-wider text-neutral-500 font-bold ">{item.year}</p>
                                </div>
                            
                                
                                <Link to={item.reproducir} className="text-left" > Ver
                                </Link>
                            
                            </div>
                       
                     
                     
                    </div>
                ))
            }

        </Slider>
  
        </div>
       
    </section>
  )
}

export default Music