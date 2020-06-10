import React , {useState} from 'react'
import "./Carousel.css"

const Carousel = () => {
   let imageArr = [1, 2, 3, 4, 5, 6]  // using numbers, implementing images later
   const lengthToCover = (1-imageArr.length)*100
   const [xcoord, setXcoord] = useState(0)
   let imageStyle = {
       transform: `translateX(${xcoord}%)`,
       backgroundColor: "#BFFFFF"
   }
   const goToPrev = () => {
    xcoord === 0 ? setXcoord(lengthToCover) : setXcoord(xcoord + 100) 
   }
   const goToNext = () => {
    xcoord !== lengthToCover ? setXcoord(xcoord - 100) : setXcoord(0)
       
}
    return (
        <div className = "carousel">
            <button className = "prev-image-btn btn" onClick={goToPrev}>Prev</button>
            {imageArr.map((image, i) => {
                return <div key={i} className = "image-slide" style={imageStyle}>{image}</div>
            })}
            <button className = "next-image-btn btn" onClick={goToNext}>Next</button>

        </div>
    )
}
export default Carousel;