import img_1 from '../../assets/images/original/img_1.jpg'
import img_2 from '../../assets/images/original/img_2.jpg'
import img_3 from '../../assets/images/original/img_3.jpg'
import img_4 from '../../assets/images/original/img_4.jpg'
import img_5 from '../../assets/images/original/img_5.jpg'
import img_6 from '../../assets/images/original/img_6.jpg'
import img_7 from '../../assets/images/original/img_7.jpg'
import img_8 from '../../assets/images/original/img_8.jpg'
import img_9 from '../../assets/images/original/img_9.jpg'
import img_10 from '../../assets/images/original/img_10.jpg'
import img_11 from '../../assets/images/original/img_11.jpeg'
import img_12 from '../../assets/images/original/img_12.jpg'
import img_13 from '../../assets/images/original/img_13.jpg'
import img_14 from '../../assets/images/original/img_14.jpg'
import img_15 from '../../assets/images/original/img_15.jpg'
import img_16 from '../../assets/images/original/img_16.jpeg'

import img_1_small from '../../assets/images/scaled/img_1_small.jpg'
import img_2_small from '../../assets/images/scaled/img_2_small.jpg'
import img_3_small from '../../assets/images/scaled/img_3_small.jpg'
import img_4_small from '../../assets/images/scaled/img_4_small.jpg'
import img_5_small from '../../assets/images/scaled/img_5_small.jpg'
import img_6_small from '../../assets/images/scaled/img_6_small.jpg'
import img_7_small from '../../assets/images/scaled/img_7_small.jpg'
import img_8_small from '../../assets/images/scaled/img_8_small.jpg'
import img_9_small from '../../assets/images/scaled/img_9_small.jpg'
import img_10_small from '../../assets/images/scaled/img_10_small.jpg'
import img_11_small from '../../assets/images/scaled/img_11_small.jpeg'
import img_12_small from '../../assets/images/scaled/img_12_small.jpg'
import img_13_small from '../../assets/images/scaled/img_13_small.jpg'
import img_14_small from '../../assets/images/scaled/img_14_small.jpg'
import img_15_small from '../../assets/images/scaled/img_15_small.jpg'
import img_16_small from '../../assets/images/scaled/img_16_small.jpeg'

const SolutionThree = () => {
  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
        }}
    >
        <img
            data-sizes="auto"
            data-src={img_1}
            className="lazyload"
            src={img_1_small}
        />
        
        <img
            data-sizes="auto"
            data-src={img_2}
            className="lazyload" 
            src={img_2_small}
        />

        <img
            data-sizes="auto"
            data-src={img_3}
            className="lazyload"
            src={img_3_small} 
        />
        
        <img
            data-sizes="auto"
            data-src={img_4}
            className="lazyload"
            src={img_4_small} 
        />

        <img
            data-sizes="auto"
            data-src={img_5}
            className="lazyload" 
            src={img_5_small}
        />

        <img
            data-sizes="auto"
            data-src={img_6}
            className="lazyload" 
            src={img_6_small}
        />

        <img
            data-sizes="auto"
            data-src={img_7}
            className="lazyload" 
            src={img_7_small}
        />

        <img
            data-sizes="auto"
            data-src={img_8}
            className="lazyload" 
            src={img_8_small}
        />

        <img
            data-sizes="auto"
            data-src={img_9}
            className="lazyload" 
            src={img_9_small}
        />

        <img
            data-sizes="auto"
            data-src={img_10}
            className="lazyload" 
            src={img_10_small}
        />

        <img
            data-sizes="auto"
            data-src={img_11}
            className="lazyload" 
            src={img_11_small}
        />

        <img
            data-sizes="auto"
            data-src={img_12}
            className="lazyload" 
            src={img_12_small}
        />

        <img
            data-sizes="auto"
            data-src={img_13}
            className="lazyload" 
            src={img_13_small}
        />

        <img
            data-sizes="auto"
            data-src={img_14}
            className="lazyload" 
            src={img_14_small}
        />

        <img
            data-sizes="auto"
            data-src={img_15}
            className="lazyload" 
            src={img_15_small}
        />

        <img
            data-sizes="auto"
            data-src={img_16}
            className="lazyload" 
            src={img_16_small}
        />

    </div>
  )
}
export default SolutionThree;

// https://www.npmjs.com/package/lazysizes