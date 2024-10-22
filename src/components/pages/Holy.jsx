import deezer from '../../assets/images/media/deezer.webp'
import play from  '../../assets/images/media/playstore.webp'
import spotify from  '../../assets/images/media/spotify.webp'
import tunes from  '../../assets/images/media/tunes.webp'
import vinyl from  '../../assets/images/media/vinyl.webp'
import yt from  '../../assets/images/media/yt.webp'

const Holy = () => {
  return (

    <>
    <section  className='bg-bannerBg absolute -z-10  w-full  bg-cover bg-center dui-bg-fixed'>
    <div className='flex flex-col items-center justify-center backdrop-blur-lg '>
        <div >
        <iframe width="450" height="315" src="https://www.youtube.com/embed/hvWnnSCJHeM?si=W2LgoOFBOmIsfIBX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

            <ul className='flex flex-col items-center justify-center bg-neutral-100 py-3 w-[450px]'>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={deezer} alt="img" className='h-8 w-[145px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Escuchar</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={play} alt="img" className='h-8 w-[145px]' />
                    <a href="# " className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Comprar</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={spotify} alt="img" className='h-8 w-[145px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Escuchar</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={tunes} alt="img" className='h-8 w-[145px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Escuchar</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={vinyl} alt="img" className='h-8 w-[145px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Escuchar</a>
                </li>
                <li className='w-full py-2 flex items-center justify-around border-b border-b-neutral-400'>
                    <img src={yt} alt="img" className='h-8 w-[145px]' />
                    <a href="#" className='mx-4 px-11 py-2 bg-neutral-300 rounded-md'>Reproducir</a>
                </li>
            </ul>
        <div>

        </div>
    </div>

    </section>
   
  


    </>

  )
}

export default Holy