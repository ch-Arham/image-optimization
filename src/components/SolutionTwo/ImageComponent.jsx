/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ blurHash, src }) => {
    const [imageLoaded, setImageLoaded] = useState(false)


    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            setImageLoaded(true)
        }
    }, [src])



  return (
    <div
        style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {
            !imageLoaded ? (
                <Blurhash
                    hash={blurHash}
                    width={500}
                    height={400}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : (
                <img
                    src={src}
                    alt="random"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    loading="lazy"
                />
            )
        }


    </div>
  )
}
export default ImageComponent

// Problem is that the blur image does not perfectly align with the actual image:
// Have to set width and height for different screen sizes and match it with the blurhash width and height


// Solution: use the same width and height for both the blurhash and the actual image
// Solution2: It is implemented in the above code
