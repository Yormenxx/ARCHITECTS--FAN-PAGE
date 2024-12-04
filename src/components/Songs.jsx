
import { SONGS } from '../constants'
import { useRef } from 'react'
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Songs = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
    })

    // const [reproduciendo, setReproduciendo] = useState(null);
    // const handlePlay = (index) => {
    //     setReproduciendo(index);
    //   };
    const audio = new Audio()

    const audioRef = useRef(audio)

    const [reproduciendo, setReproduciendo] = useState(null)

    const handlePlay = (index) =>{

        setReproduciendo(index)

        if(reproduciendo == index){

            if(audioRef.current.paused){
                audioRef.current.src = SONGS[index].pathSong
                audioRef.current.play()
           }else{
                audioRef.current.pause()
           }
        }else{
            audioRef.current.src = SONGS[index].pathSong
            audioRef.current.play()
        }
     
    }
  return (
    <div>
              {
                SONGS.map((item, key)=>(

                    <div key={key} className='flex flex-col flex-wrap gap-x-9 '>

                        <div className={`w-full flex justify-around items-center  mb-9 hover:bg-neutral-800 duration-200 ease-in-out cursor-pointer ${reproduciendo == key ? "bg-neutral-900": ""} ` }
                        onClick={() => handlePlay(key)} >

                            <div className='flex items-center justify-start gap-x-2 w-[200px]'>
                                <img src={item.image} className='rounded-md' width={64} height={64} alt="" 
                                 data-aos="fade-up"/>
                                <h4 className='text-lg font-bold' data-aos="fade-up">{item.song}</h4>
                            </div>
                            <p className='w-[150px] hidden md:flex ' data-aos="fade-up">{item.band}</p>
                            <p className='w-[150px] text-lg' data-aos="fade-up">{item.album}</p>

                        </div >

                        
                
                    </div>


                ))
            }
    </div>
  )
}

export default Songs