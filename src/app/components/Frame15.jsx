import React from 'react'
import styles from './Frame15.module.css'
import vector7 from '../assets/images/Vector-7.png'
import ellipse50 from '../assets/images/Ellipse50.png'
const Frame15 = () => {
  return (
  <div className={styles['frame-15']}>
    <div className={styles['sm-marketing']}>Social Media Marketing</div>
    <div className={styles['rectangle-41']}></div>
    <div className={styles['group-148']}>
      <div className={styles['long-text']}>Unlock a world of possibilities for your brand. Our Streamlined approach ensures that you can maximize your Online Presence.</div>
      <div className={styles['box-1']}>
        <img src={vector7} alt="vector7" className={styles['vector-7']}></img>
        <div className={styles['box-text']}>Social</div>
      </div>
    </div>
    
    <div className={styles['rectangle-43']}>
      <img src={vector7} alt="vector7" className={styles['vector-7']} style={{left:"2.6px", top:"4.3px"}}></img>
        <div className={styles['box-text']} style={{left:"13px", top:"3.3px"}}>Creatives</div>
    </div>

    <div className={styles['rectangle-44']}>
     <img src={vector7} alt="vector7" className={styles['vector-7']} style={{ top:"4.3px"}}></img>
        <div className={styles['box-text']} style={{left:"10px", top:"3.1px"}}>Optimizations</div>
    </div>
    <div className={styles['rectangle-45']}>
      <img src={vector7} alt="vector7" className={styles['vector-7']} style={{left:"2.6px", top:"4.3px"}}></img>
        <div className={styles['box-text']} style={{left:"12px", top:"3.3px"}}>Leads</div>
    </div>
    <div className={styles['rectangle-46']}>
    <img src={vector7} alt="vector7" className={styles['vector-7']} style={{left:"2.6px", top:"4.3px"}}></img>
        <div className={styles['box-text']} style={{left:"12px", top:"3.3px", whiteSpace: "nowrap"}}>Trending Things</div>
    </div>
    <div className={styles['circle-1']}></div>
    <div className={styles['circle-2']}></div>
    <img src={ellipse50} alt="ellipse50" className={styles['shape-1']}></img>
    
  </div>

  )
}

export default Frame15
