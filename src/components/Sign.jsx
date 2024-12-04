import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sign = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
})

  return (
   
    <section id="sign" data-aos="fade-up">

        <div >
            <h2 className="text-center font-bold text-6xl capitalize py-3 underline" >sign up</h2>
            <p className="w-[60%] text-center mx-auto">Be the first to know about new collections and exclusive offers.</p>
            <form action="" className="w-full flex flex-col items-center space-y-4 justify-center my-10 max-w-2xl mx-auto">
                <div className="w-full flex gap-2 justify-center">
                    <input type="text" placeholder="FIRST NAME" className="w-full px-10 py-2 outline-none border border-neutral-900 rounded-md" required/>
                    <input type="text"  placeholder="LASTNAME NAME" className="w-full px-10 py-2 outline-none border border-neutral-900 rounded-md" required  />
                </div>
                <input type="email" placeholder="EMAIL" className="w-full px-10 py-2 outline-none border border-neutral-900 rounded-md" required/>
                <button type="submit" className="w-full bg-neutral-950 text-white  px-10 py-2 outline-none border  rounded-md hover:bg-neutral-800 duration-200 ease-in-out">Submit</button>
                
            </form>
            <p className="w-[60%] text-center mx-auto text-sm" >By subscribing, I confirm I have read and understood the privacy and cookie policy and agree to the processing of my data and the use of cookies in accordance with it.</p>
        </div>


    </section>
  )
}

export default Sign