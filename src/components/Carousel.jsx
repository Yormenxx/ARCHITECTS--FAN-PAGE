import { MERCH } from "../constants"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {

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

    <section className="  py-10">
         <div>
            <h2 className="text-center font-bold text-6xl capitalize py-10 underline">MERCH</h2>
        </div>

    <div className="w-[90%] mx-auto">
      <Slider {...settings}>

      {
        MERCH.map((item, key)=>(
          <div key={key} className="p-2 flex flex-col items-center justify-center " >

            <div >
              <img src={item.image} className=" w-200px h-200px md:w-[300px] mx-auto lg:h-[300px]  " alt="" />
            </div>
            <div className="text-center">
              <h3 className="capitalize text-2xl font-semibold">{item.title}</h3>
              <span className="font-bold">{item.year}</span>
            </div>

          </div>
        ))
      }

      </Slider>
  

    </div>

  

    {/* <div className="w-[90%] mx-auto">
      <Slider {...settings}>

      {
        MERCH.map((item, key)=>(
          <div key={key} className="p-2 flex flex-col items-center justify-center " >

            <div >
              <img src={item.image} className="w-[300px] mx-auto h-[300px] " alt="" />
            </div>
            <div className="text-center">
              <h3 className="capitalize text-xl font-semibold">{item.title}</h3>
              <span className=" font-bold">{item.year}</span>
            </div>

          </div>
        ))
      }

      </Slider>
  

    </div> */}

    <div className="py-6 w-full flex justify-center">
      <a href="#" className=" inline-block mx-auto px-12 py-2 bg-neutral-50 text-neutral-950 rounded-lg font-semibold  shadow-2xl border border-black hover:bg-neutral-950 hover:text-white hover:border-white duration-200 ease-in-out">Ver toda la mercancia</a>
    </div>

    </section>

    


 
  )
}

export default Carousel
