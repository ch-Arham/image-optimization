import { useState, useEffect } from "react"

import ImageComponent from "./ImageComponent.jsx"

import { data } from "./data.js"


const SolutionTwo = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(data)
    }, []);
        


  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
        }}
    >
        {images.map((image, index) => (
            <ImageComponent
                key={index}
                blurHash={image.blurHash}
                src={image.src}
            />
        ))}


    </div>
  )
}
export default SolutionTwo