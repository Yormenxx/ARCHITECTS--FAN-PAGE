import { useEffect } from "react"

const Scroll = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }
    
      useEffect(() => {
        const timerId = setTimeout(() => {
          scrollToTop()
        }, 10)
    
        return () => clearTimeout(timerId)
      }, [])
    
}

export default Scroll