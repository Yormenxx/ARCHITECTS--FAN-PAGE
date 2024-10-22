
import { Link } from "react-router-dom"
import { DISC } from "../constants"
const Music = () => {
  return (
    <section className="bg-neutral-950 text-white" >

        <div>
            <h2 className="text-center font-bold text-6xl capitalize py-10 underline">Musica</h2>
        </div>

        {/* className="grid grid-cols-1 lg:grid-cols-4 justify-center  gap-1" */}

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center space-x-5 gap-2 flex-wrap ">
            {
                DISC.map((item,key)=>(
                    <div key={ key }  >
                       
                        <Link to={item.reproducir} >
                        <div className="my-6 flex flex-col justify-center text-center max-w-48">
                            <div >
                                <img src={item.image} alt="img" className="w-[200px] " />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl tracking-wide mb-4 ">{item.title}</h3>
                                <p className="text-xl leading-3 tracking-wider text-neutral-300 font-bold ">{item.year}</p>
                            </div>
                            <div className="my-4">

                              
                             
                            </div>
                        </div>

                         </Link>
                     
                    </div>
                ))
            }
        </div>
       
    </section>
  )
}

export default Music