import React , {useState} from 'react'
import Image from "../Image/Image"
import "./Carousel.css"

const Carousel = () => {
   let imageArr = []
   let numberOfImages = 6
    for (let i = 0; i < numberOfImages; i++){
        imageArr.push(<Image src={`https://source.unsplash.com/user/erondu/75${i}x54${i}`}/>)
    }
   const lengthToCover = (1-imageArr.length)*100
   const [xcoord, setXcoord] = useState(0)
   let imageStyle = {
       transform: `translateX(${xcoord}%)`,
    //    backgroundColor: "#BFFFFF"
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
                return <div key={i} className = "image-slider" style={imageStyle}>{image}</div>
            })}
           
            <button className = "next-image-btn btn" onClick={goToNext}>Next</button>

        </div>
    )
}
export default Carousel;