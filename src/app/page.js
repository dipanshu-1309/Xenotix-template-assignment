
import Frame10 from "./components/Frame10"
import Vectorthree from "./components/Vectorthree"
import Vectortwo from "./components/Vectortwo"

import Group158 from "./components/Group158"
import Frame43 from "./components/Frame43"
import Frame43A from "./components/Frame43A"
import MetaAds from "./components/MetaAds"
import Frame15 from "./components/Frame15"
import Uiux from "./components/Uiux"
import Frame29 from "./components/Frame29"
import Frame28 from "./components/Frame28"
import Frame30 from "./components/Frame30"
import Frame31 from "./components/Frame31"
import Frame32 from "./components/Frame32"
import Group157 from "./components/Group157"
import "./globals.css"

export default function Home() {
  return (
    <div className="maindiv">
      <div className="div-1">
        <div className="ellipse-6"></div>
        <div className="background-effect"></div>
        <Group158 />
        <Group157 />
        <Frame32 /> 
        <Frame31 />
        <img src="/assets/images/decoration.png" alt="image0" className="image0" />
        <Vectortwo />
        <Vectorthree />
     
      </div>

      <div className="div-2">
        <div className="Text1">Xenotix Tech</div>
        <div className="Text2">Got a startup Idea !</div>
        <div className="Text3">Let&apos;s Turn It Into Reality.</div>
        <div>
      <img src='/assets/images/Vector.png' alt="Vector" className="vector"></img>
    </div>
        <div className="middle-block-1">
        <img src="/assets/images/2944870.png" alt="image1" className="image1" />
        </div>
        <div className="middle-block-2">
          <img src="/assets/images/aws.png" alt="image2" className="image2" />
        </div>
        <div className="middle-block-3">
          <img src="/assets/images/N.png" alt="image3" className="image3" />
        </div>
        <div className="middle-block-4">
          <img src="/assets/images/SEO.png" alt="image4" className="image4" />
       </div>
       <div className="middle-block-5">
          <img src="/assets/images/NFT.png" alt="image5" className="image5" />
        </div>
        <div className="middle-block-6">
          <img src="/assets/images/GPT.png" alt="image6" className="image6" />
        </div>
      </div>

      <div className="div-3">
        <Uiux />
        <Frame28 />
        <Frame29 />
        <Frame30 />
      </div>
      <div className="div-4">
       <Frame10/>
      </div>
      

      <div className="div-5">
       <Frame43 />
       <Frame43A />
       <MetaAds /> 
       <Frame15 /> 
      </div>

    </div>
  )
}
