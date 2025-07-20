import "./globals.css"
import Frame10 from "./components/Frame10"
import Vector from './components/Vector'
import Vectorthree from "./components/Vectorthree"
import Vectortwo from "./components/Vectortwo"
import image1 from './assets/images/2944870.png'
import image2 from './assets/images/aws.png'
import image3 from './assets/images/N.png'
import image4 from './assets/images/SEO.png'
import image5 from './assets/images/NFT.png'
import image6 from './assets/images/GPT.png'
import image0 from './assets/images/decoration.png'
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



export default function Home() {
  return (
      <div className="maindiv">
        <Frame31 />
        <Frame32 />
        <div className="Text1">Xenotix Tech</div>
        <div className="Text2">Got a startup Idea !</div>
        <div className="Text3">Let's Turn It Into Realityyy.</div>
        <img src={image0} alt="image0" className="image0"></img>
        <Vector />
        <Vectortwo />
        <Vectorthree />
        <Frame10/>
        <div className="middle-block-1"><img src={image1} alt="image1" className="image1"></img></div>
        <div className="middle-block-2"><img src={image2} alt="image2" className="image2"></img></div>
        <div className="middle-block-3"><img src={image3} alt="image3" className="image3"></img></div>
        <div className="middle-block-4"><img src={image4} alt="image4" className="image4"></img></div>
        <div className="middle-block-5"><img src={image5} alt="image5" className="image5"></img></div>
        <div className="middle-block-6"><img src={image6} alt="image6" className="image6"></img></div>
        <div className="background-effect"></div>
        <Group158 />
        <Frame43 />
        <Frame43A />
        <MetaAds />
        <Frame15 />
        <Uiux />
        <Frame29 />
        <Frame28 />
        <Frame30 />
        <Group157 />
      </div>
  )
}

