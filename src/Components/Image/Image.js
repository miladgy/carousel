"src = https://source.unsplash.com/user/erondu/800x600"
import React from 'react'

function Image({src}) {

    return (
            <img className= "image" src={src} alt="random pictures from erondu on unsplash" />
        
    )
}

export default Image
