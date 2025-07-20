import styles from './MetaAds.module.css'
const MetaAds = () => {
  return (
    <>
    <div className={styles['meta-div']}>
      <div className={styles['rectangle-52']}>      
      </div>
      <img src='/assets/images/fblogo.png' alt="fblogo" className={styles['fb-logo']}></img>
      <div className={styles['rectangle-54']}></div>
      <img src='/assets/images/instalogo.png' alt="instalogo" className={styles['insta-logo']}></img>
      <div className={styles['rectangle-53']}> </div>
      <div className={styles['frame-41']}> 
        <div className={styles['vector-container']}> 
          {/* <img src='/assets/images/Vectortick.png' alt="vectortick" className={styles['vector-tick']}></img> */}
          <div className={styles['vector-tick']}></div>
          <div className={styles['verified']}>Verified</div>
        </div>
      </div>
      <div className={styles['meta-ads']}>META <br></br>  Ads</div>
      <div className={styles['text']}>Ad Spend, Well Spent.</div>
      
    </div>
    
    </>
  )
}

export default MetaAds
