import deezer from '../../assets/images/media/deezer.webp'
import play from  '../../assets/images/media/playstore.webp'
import spotify from  '../../assets/images/media/spotify.webp'
import tunes from  '../../assets/images/media/tunes.webp'
import vinyl from  '../../assets/images/media/vinyl.webp'
import yt from  '../../assets/images/media/yt.webp'
import img from '../../assets/images/disco/RUIN.jpg'
import { Play,Info,Share2} from 'lucide-react'
import Scroll from '../../Scroll'
const Ruin = () => {
  return (

    <>
    <Scroll/>
    <section  className='bg-bgRuin absolute -z-10  w-full  bg-cover bg-center dui-bg-fixed'>

        <article className='backdrop-blur-3xl py-12'>

        <div>
            <div >
            <div className='flex items-center text-white justify-start gap-7 pl-10   '>
                <div> 
                    <img src={img}width={400} height={400} alt="" />
                </div>
                <div>
                    <h3 className='font-extrabold text-4xl text-neutral-950'>Holy Hell</h3>
                    <h4 className='font-bold text-2xl text-neutral-300'>Architects</h4>
                    <span className='text-neutral-300'>2016</span>
                </div>

            </div>

            <div className='flex sm:justify-between relative z-20 py-6 px-10 flex-wrap gap-y-2 justify-center sm:items-center'>
            <a href="https://open.spotify.com/intl-es/artist/3ZztVuWxHzNpl0THurTFCv" target='_blank' className='flex px-12 items-center justify-center bg-neutral-50 rounded-lg text-2xl font-bold hover:bg-neutral-800 hover:text-white duration-200 ease-in-out'>
                <Play />
                Play
            </a>

            <div className='flex space-x-3 pr-6'>
            <a href='https://en.wikipedia.org/wiki/Architects_(British_band)' target='_blank' className='flex flex-col items-center justify-center text-neutral-300'>
                    <Info />
                    
                    Artist biography
                </a>
                <div className='flex flex-col items-center justify-center text-neutral-300'>
                    <Share2 />
                    Share
                </div>
            </div>
        </div>

        </div>

            </div>
            <div className='flex flex-col items-center justify-center backdrop-blur-lg '>
        <div >
        <iframe width="450" height="315" src="https://www.youtube.com/embed/bFl8-ecBvcQ?si=-demJ7Wl9fvDqXbD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <ul className='flex flex-col items-center justify-center bg-neutral-100 py-3 w-[450px]'>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={deezer} alt="img" className=' w-[110px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center'>Listen now</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={play} alt="img" className='w-[110px]' />
                    <a href="# " className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center'>Buy now</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={spotify} alt="img" className=' w-[110px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center'>Listen now</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={tunes} alt="img" className=' w-[110px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center' >Listen now</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={vinyl} alt="img" className=' w-[110px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center'>Listen now</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={yt} alt="img" className=' w-[110px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md w-[180px] text-center'>Go now</a>
                </li>
            </ul>
        <div>

        </div>
    </div>
        </article>
   

    </section>
   
  


    </>

  )
}

export default Ruin