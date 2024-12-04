import group from '../assets/images/Group1.png'
import arch from '../assets/images/ARCHITECTS-BAND.jpg'
import { Play,Info,X } from 'lucide-react'
import Songs from './Songs'
import Share from './Share'
import { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Repro = () => {

    useEffect(()=>{
        AOS.init({duration:1000})
    })


    const [ biography, showBiography] = useState(false)

    const handleShowModal = () => {
        showBiography(true);
      };
    
      const handleCloseModal = () => {
        showBiography(false);
      };


  return (
   <section id='song'>
    <div>
        <div data-aos="fade-up" >
            <img src={group} alt="img"  className='w-full ' />
        </div>

        <div className='relative z-10 w-full shadow-[0px_-27px_20px_33px_#111111] bg-[#111] text-white font-bold text-5xl px-6 py-5 lg:text-left text-center' >
            <h3 data-aos="fade-up">Architects</h3>
        </div>


        <div className='flex justify-center gap-x-3 lg:justify-between gap-y-3 relative z-20 bg-[#111] px-5 py-6 flex-wrap'>

            
            <a href="https://open.spotify.com/intl-es/artist/3ZztVuWxHzNpl0THurTFCv" target='_blank' className='flex px-12 items-center justify-center bg-neutral-50 rounded-lg text-2xl font-bold' data-aos="fade-up">
                <Play />
                Play
            </a>

            <div className='flex space-x-3 pr-6'>

                <div>

                    <div className='flex flex-col items-center justify-center text-neutral-300 cursor-pointer' data-aos="fade-up">
                        <Info  onClick={handleShowModal} />

                             Artist biography
                    </div>

                    {biography && (
                        
                        <div className='fixed z-30 inset-0  w-[90%] lg:w-[65%] p-5 rounded-lg  top-1 lg:top-10 left-4  lg:left-56 bg-[#222] text-white overflow-y-auto overflow-x-hidden shadow-2xl '>
                           <X onClick={handleCloseModal} className='cursor-pointer'/>

                            <div className='relative overflow-y-auto p-4 '>
                                <div className='flex justify-center' data-aos="fade-up">
                                    <img src={arch} width={300} height={300}  alt="archBio"   />
                                </div>
                                <h2 className='text-5xl font-bold text-center py-5' data-aos="fade-up">Architects</h2>
                                <p className='text-center' data-aos="fade-up">Biography</p>
                                <div className='px-2 lg:px-11 py-3 leading-relaxed relative text-xl p-4 max-h-auto' data-aos="fade-up">
                                Architects are a British metalcore band from Brighton, East Sussex, formed in 2004 by twin brothers Dan and Tom Searle. The band now consists of Dan Searle on drums, Sam Carter on vocals, Alex Dean on bass, and Adam Christianson on guitar. They have been signed to Epitaph Records since 2013.

                                    Strongly influenced by bands such as The Dillinger Escape Plan, the sound of their first three albums was coarse, chaotic, and rhythmically complex. In 2011, Architects went in a more melodic post-hardcore direction with The Here and Now, alienating some of their fanbase. The following year, they returned towards their original style with Daybreaker, establishing a balance of melody and technical harshness while introducing more politicised lyrics. With the release of their sixth album Lost Forever // Lost Together in 2014, the band achieved lasting popularity and critical acclaim.

                                    Soon after the release of their seventh album, All Our Gods Have Abandoned Us, in 2016, guitarist and principal songwriter Tom Searle died after three years of living with skin cancer, making Dan Searle the only original band member. In September 2017, the band released the single Doomsday, the last song he was working on before his death, and announced Middleton as their new lead guitarist. The single is featured on Holy Hell, their first album recorded without Tom Searle, which was released in November 2018. Their ninth studio album, For Those That Wish to Exist, was released in 2021, and became their first chart-topper on the UK Albums Its follow-up and their most recent album, The Classic Symptoms of a Broken Spirit, was released in October 2022.
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            
                <div className='relative flex flex-col items-center justify-center text-neutral-300' data-aos="fade-up">
                    <Share />
                </div>
            </div>
        </div>
        <article className='bg-[#111] text-white'>
            <div>
                <h2 className='pl-4 font-bold text-6xl capitalize py-10 ' data-aos="fade-up">Top Songs</h2>
            </div>

            <Songs />
        
        </article>
    </div>
   </section>
  )
}

export default Repro