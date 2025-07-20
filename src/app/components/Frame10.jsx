import React from 'react'
import styles from './Frame10.module.css'
import Frame47 from "./Frame47"
import frame63 from '../assets/images/Frame 63.png'
import frame60 from '../assets/images/Frame 60.jpg'
import frame65 from '../assets/images/Frame 65.png'
import frame66 from '../assets/images/Frame 66.png'
import frame62 from '../assets/images/Frame 62.png'
import frame64 from '../assets/images/Frame 64.png'
import frame61 from '../assets/images/Frame 61.png'
import image10 from '../assets/images/image 10.png'
import image8 from '../assets/images/image 8.png'
import image11 from '../assets/images/image 11.png'
import image9 from '../assets/images/image 9.png'
import vector4 from '../assets/images/Vector-4.png'
import vector5 from '../assets/images/Vector-5.png'
import vector6 from '../assets/images/Vector-6.png'
import vectorB1 from '../assets/images/Vector-x.png'
import vectorB2 from '../assets/images/Vector-y.png'
import vectorB3 from '../assets/images/Vector-b.png'
import vectorB4 from '../assets/images/Vector-z.png'
import vectorB5 from '../assets/images/Group.png'
import vectorB6 from '../assets/images/Vector-a.png'
import vector34 from '../assets/images/Vector 33.png'
import vector33 from '../assets/images/Vector 33.png'


const Frame10 = () => {
  return (
    <div className={styles['frame-10']}>
      <div style={{position:"relative"}}>
        <div className={styles['text-10-1']}>Curious About IoT..?</div>

        <div className={styles['text-10-2']}>Why Not Create It?</div>
            <div className={styles['group-170']}>
            <img src={vector34} alt="vector34" className={styles['vector-34']}></img>
            <img src={vector33} alt="vector33" className={styles['vector-33']}></img>
        </div>
        
        <Frame47/>
          <img src={frame60} alt="frame60" className={styles['frame-60']}></img>
          <img src={frame63} alt="frame63" className={styles['frame-63']}></img>
          <img src={frame65} alt="frame65" className={styles['frame-65']}></img>
          <img src={frame66} alt="frame66" className={styles['frame-66']}></img>
          <img src={frame62} alt="frame62" className={styles['frame-62']}></img>
          <img src={frame64} alt="frame64" className={styles['frame-64']}></img>
          <img src={frame61} alt="frame61" className={styles['frame-61']}></img>
          <img src={image10} alt="image10" className={styles['image-10']}></img>
          <img src={image8} alt="image8" className={styles['image-8']}></img>
          <img src={image9} alt="image9" className={styles['image-9']}></img>
          <img src={image11} alt="image11" className={styles['image-11']}></img>
          <img src={vector4} alt="vector4" className={styles['vector-4']}></img>
          <img src={vector5} alt="vector5" className={styles['vector-5']}></img>
          <img src={vector6} alt="vector6" className={styles['vector-6']}></img>

          <div className={styles['black-box-1']}><img src={vectorB1} alt="vectorB1" className={styles['vectorB1']}></img></div>
          <div className={styles['black-box-2']}><img src={vectorB2} alt="vectorB2" className={styles['vectorB2']}></img></div>
          <div className={styles['black-box-3']}><img src={vectorB3} alt="vectorB3" className={styles['vectorB3']}></img></div>
          <div className={styles['black-box-4']}><img src={vectorB4} alt="vectorB4" className={styles['vectorB4']}></img></div>
          <div className={styles['black-box-5']}><img src={vectorB5} alt="vectorB5" className={styles['vectorB5']}></img></div>
          <div className={styles['black-box-6']}><img src={vectorB6} alt="vectorB6" className={styles['vectorB6']}></img></div>
          <div className={styles['rectangle-94']}></div>
          <div className={styles['rectangle-93']}></div>


          
      </div>
    </div>
  )
}

export default Frame10;



