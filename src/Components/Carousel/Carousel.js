import React , {useState, useEffect} from 'react'
import Image from "../Image/Image"
import "./Carousel.css"

const Carousel = () => {
   let numberOfImages = 6
   const lengthToCover = (1-numberOfImages)*100
   const [xcoord, setXcoord] = useState(0)
   const [active, setActive] = useState(false)

   let slideStyle = {
       transform: `translateX(${xcoord}%)`
   }
   const goToPrev = () => {
    xcoord === 0 ? setXcoord(lengthToCover) : setXcoord(xcoord + 100) 
   }
   const goToNext = () => {
    xcoord !== lengthToCover ? setXcoord(xcoord - 100) : setXcoord(0)

    }
    useEffect(() => {
       
       const interval = setInterval(() => {
            goToNext()
        }, 6000);
        return () => {
            clearInterval(interval)
            
        }
    })
   
    return (
        <div className = "carousel">
            {Array.from(Array(numberOfImages),(x,i)=>i).map((x, i) => {
                return <div key={i} className = "image-slider" style={slideStyle}><Image className ="image" src={`https://source.unsplash.com/random/200${i}x100${i}`}/></div>
            })}
            <button className = "prev-image-btn btn" onClick={goToPrev}>&#8249;</button>
            <button className = "next-image-btn btn" onClick={goToNext}>&#8250;</button>

        </div>
    )
}
export default Carousel;