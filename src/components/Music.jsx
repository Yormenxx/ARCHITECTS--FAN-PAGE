
import { DISC } from "../constants"
const Music = () => {
  return (
    <section >

        <div>
            <h2 className="text-center font-bold text-6xl capitalize py-10 underline">Musica</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-1">
            {
                DISC.map((item,key)=>(
                    <div key={ key } className="flex flex-col items-center " >
                        <div className="my-6">
                            <div >
                                <img src={item.image} alt="img" className="w-[400px] rounded-md" />
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl tracking-wide ">{item.title}</h3>
                                <p className="text-xl leading-3 tracking-wider text-neutral-700 font-bold">{item.year}</p>
                            </div>
                            <div className="my-4">
                                <a href="#" className="border-2 border-neutral-900 rounded-md px-[50px] py-2 mr-2 hover:bg-neutral-900 hover:text-white duration-200 ease-out">Get</a>
                                <a href="#" className="border-2 border-neutral-900 rounded-md px-[50px] py-2  hover:bg-neutral-900 hover:text-white duration-200 ease-out">Info</a>
                            </div>
                        </div>
                     
                    </div>
                ))
            }
        </div>
       
    </section>
  )
}

export default Music