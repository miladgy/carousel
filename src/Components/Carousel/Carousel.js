import React from 'react'
import "./Carousel.css"

const Carousel = () => {
   let imageArr = [1, 2, 3, 4, 5, 6]  // using numbers, implementing images later
   const goToPrevImage = () => {

   }
   const goToNextImage = () => {
       
}
    return (
        <div className = "carousel">
            <button className = "prev-image-btn btn">Prev</button>
            {imageArr.map((image, i) => {
                return <div key={i} className = "image-slide">{image}</div>
            })}
            <button className = "next-image-btn btn">Next</button>

        </div>
    )
}
export default Carousel;