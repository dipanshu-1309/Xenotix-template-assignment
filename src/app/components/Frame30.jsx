import React from 'react'
import styles from "./Frame30.module.css"
import image from '../assets/images/Vector 32.png'

const Frame30 = () => {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["text1"]}>Artificial Intelligence</div>
      <div className={styles["text2"]}>Startup Growth</div>
      <div className={styles["div2"]}></div>
      <div className={styles["text3"]}>Mobile</div>
      <div className={styles["div3"]}></div>
      <div className={styles["text4"]}>Web-Application</div>
      <img src={image} alt="image" className={styles["image"]}/>
    </div>
  )
}

export default Frame30
