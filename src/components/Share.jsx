import { useState } from "react"
import { Share2, X, Link,Facebook, Instagram} from 'lucide-react'
const Share = () => {
  
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
    return (
        <div>
            <Share2 onClick={handleShowModal} className="cursor-pointer"/>Share
                {showModal && (
                <div className=" w-[200px] absolute top-8 right-0 rounded-lg  shadow-2xl   text-white bg-neutral-950">
                        <div onClick={handleCloseModal} className="flex justify-end p-2 cursor-pointer"><X/></div>
                        <div>
                          
                         
                            <div className="flex flex-col gap-y-4 items-center">
                                <div className="w-full px-4 py-2 flex  justify-center cursor-pointer hover:bg-neutral-700 hover:text-white ease-in-out duration-150"><Facebook /> Facebook</div>
                                
                                <div className="w-full px-4 py-2 flex  justify-center cursor-pointer hover:bg-neutral-700 hover:text-white ease-in-out duration-150 "><Instagram />Instagram</div>

                                <div className="w-full px-4 py-2 flex  justify-center cursor-pointer hover:bg-neutral-700 hover:text-white ease-in-out duration-150"><Link /> Share link</div>
                            </div>
                        </div>
                </div>
      )}
        </div>
  )
}

export default Share