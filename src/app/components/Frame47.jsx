import React from 'react'
import styles from "./Frame47.module.css"
import image5 from '../assets/images/image 5.png'

const Frame47 = () => {
  return (
   <div className={styles["frame-47"]}>
  <div style={{ position: "relative" }}>
    <img className={styles["image-5"]} src={image5} alt="image-5" />
    <div className={styles.Pracpoint}>Pracpoint →</div>
  </div>
</div>
  )
}

export default Frame47;
