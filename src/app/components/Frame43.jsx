import React from 'react'
import google from '../assets/images/google.png'

const Frame43 = () => {
  return (
    <div style={{
          position: "absolute",
          width: "237px",
          height: "87px",
          left: "1124px",
          top: "596px",
          background: "#ffffffff",
          borderRadius: "20px",
          zIndex: '1',
    
                }}>
      <div className='rectangle-52'>
      </div>

       <img src={google} alt="google" className="google"></img>
       <div className='google-ads'>Google Ads</div>
       <div className='reviews-initial'> 4.8 </div>
       <div className='reviews-final'>Reviews</div>
    </div>
  )
}

export default Frame43
