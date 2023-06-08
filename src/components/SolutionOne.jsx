import { useEffect } from "react"

// importing original images
import img_1 from "../assets/images/original/img_1.jpg"
import img_2 from "../assets/images/original/img_2.jpg"
import img_3 from "../assets/images/original/img_3.jpg"
import img_4 from "../assets/images/original/img_4.jpg"
import img_5 from "../assets/images/original/img_5.jpg"
import img_6 from "../assets/images/original/img_6.jpg"
import img_7 from "../assets/images/original/img_7.jpg"
import img_8 from "../assets/images/original/img_8.jpg"
import img_9 from "../assets/images/original/img_9.jpg"
import img_10 from "../assets/images/original/img_10.jpg"
import img_11 from "../assets/images/original/img_11.jpeg"
import img_12 from "../assets/images/original/img_12.jpg"
import img_13 from "../assets/images/original/img_13.jpg"
import img_14 from "../assets/images/original/img_14.jpg"
import img_15 from "../assets/images/original/img_15.jpg"
import img_16 from "../assets/images/original/img_16.jpeg"

// importing scaled images
import img_1_small from "../assets/images/scaled/img_1_small.jpg"
import img_2_small from "../assets/images/scaled/img_2_small.jpg"
import img_3_small from "../assets/images/scaled/img_3_small.jpg"
import img_4_small from "../assets/images/scaled/img_4_small.jpg"
import img_5_small from "../assets/images/scaled/img_5_small.jpg"
import img_6_small from "../assets/images/scaled/img_6_small.jpg"
import img_7_small from "../assets/images/scaled/img_7_small.jpg"
import img_8_small from "../assets/images/scaled/img_8_small.jpg"
import img_9_small from "../assets/images/scaled/img_9_small.jpg"
import img_10_small from "../assets/images/scaled/img_10_small.jpg"
import img_11_small from "../assets/images/scaled/img_11_small.jpeg"
import img_12_small from "../assets/images/scaled/img_12_small.jpg"
import img_13_small from "../assets/images/scaled/img_13_small.jpg"
import img_14_small from "../assets/images/scaled/img_14_small.jpg"
import img_15_small from "../assets/images/scaled/img_15_small.jpg"
import img_16_small from "../assets/images/scaled/img_16_small.jpeg"


const SolutionOne = () => {
    useEffect(() => {
        const blurDivs = document.querySelectorAll('.blur-load')

        blurDivs.forEach((div) => {
            const img = div.querySelector('img')

            const loaded = () => {
                div.classList.add('loaded')
                img.removeEventListener('load', loaded);
            }

            if (img.complete) {
                loaded()
            } else {
                img.addEventListener('load', loaded)
            }
        })
    }, [])


  return (
    <div className='grid'>
        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_1_small})`,
            }}
        >
            <img src={img_1} alt='img_1' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_2_small})`,
            }}
        >
            <img src={img_2} alt='img_2' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_3_small})`,
            }}
        >
            <img src={img_3} alt='img_3' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_4_small})`,
            }}
        >
            <img src={img_4} alt='img_4' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_5_small})`,
            }}
        >
            <img src={img_5} alt='img_5' loading='lazy'/>
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_6_small})`,
            }}
        >
            <img src={img_6} alt='img_6' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_7_small})`,
            }}
        >
            <img src={img_7} alt='img_7' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_8_small})`,
            }}
        >
            <img src={img_8} alt='img_8' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_9_small})`,
            }}
        >
            <img src={img_9} alt='img_9' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_10_small})`,
            }}
        >
            <img src={img_10} alt='img_10' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_11_small})`,
            }}
        >
            <img src={img_11} alt='img_11' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_12_small})`,
            }}
        >
            <img src={img_12} alt='img_12' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_13_small})`,
            }}
        >
            <img src={img_13} alt='img_13' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_14_small})`,
            }}
        >
            <img src={img_14} alt='img_14' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_15_small})`,
            }}
        >
            <img src={img_15} alt='img_15' loading='lazy' />
        </div>

        <div 
            className="blur-load"
            style={{
                backgroundImage: `url(${img_16_small})`,
            }}
        >
            <img src={img_16} alt='img_16' loading='lazy' />
        </div>
    </div>
  )
}
export default SolutionOne