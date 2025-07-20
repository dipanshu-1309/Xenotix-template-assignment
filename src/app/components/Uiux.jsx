import React from 'react'
import styles from './Uiux.module.css'
import Down from '../assets/images/Vector-7.png'
import F from '../assets/images/F.png'
import XD from '../assets/images/XD.png'
import TAB from '../assets/images/TAB.png'
import Dash from '../assets/images/DASH.png'
import ellipse47 from '../assets/images/Ellipse47.png'

const Uiux = () => {
  return (
    <div className={styles['frame-13']}>
      <div className={styles['heading']}>UI/UX Designing</div>
      <div className={styles['line']}></div>
      <div className={styles['longtext']}> Crafting intuitive, aesthetic, and user-friendly
digital experiences</div>
      <div className={styles['circle-1']}></div>
      <div className={styles['circle-2']}></div>
      <div className={styles['box1']}>
        <img className={styles["image"]} src={F} alt="image-1" style={{width: "8px", height: "8px", transform: "rotate(20.86deg)"}}/>
        <div className={styles["text"]} style={{marginLeft:"0px"}}>Figma</div>
      </div>
      <div className={styles['box2']}>
        <img className={styles["image"]} src={XD} alt="image-2" style={{width: "8px", height: "8px", transform: "rotate(20.86deg)"}}/>
        <div className={styles["text"]}>Adobe XD</div>
      </div>
      <div className={styles['box3']}>
        <img className={styles["image"]} src={Dash} alt="image-3" style={{width: "13px", height: "13px", transform: "rotate(20.86deg)"}}/>
        <div className={styles["text"]} style={{marginLeft:"-2px"}}>Wireframe</div>
      </div>
      <div className={styles['box4']}>
        <img className={styles["image"]} src={TAB} alt="image-4" style={{width: "8px", height: "8px", transform: "rotate(20.86deg)"}}/>
        <div className={styles["text"]}>Prototype</div>
      </div>
      <div className={styles['box5']}>
        <img className={styles["image"]} src={Down} alt="image-5" style={{width: "8px", height: "6px", transform: "rotate(-8.86deg)"}}/>
        <div className={styles["text"]}>Design System</div>
      </div>
      <img src={ellipse47} alt="ellipse47" className={styles['ellipse-47']}></img>
    </div>
  )
}

export default Uiux
