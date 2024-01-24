import Frame from './Asset/Frame.png'
import cari from './Asset/cari.svg'
import labana from './Asset/labana.svg'
import wenovation from './Asset/wenovation.svg'
import giz from './Asset/giz.svg'
import image from './Asset/image.png'
import lead from './Asset/lead.png'
import google from './Asset/google.png'
import katspull from './Asset/katspull.png'
import bain from './Asset/bain.png'
import catalyst from './Asset/catalyst.png'

function About() {
  return (
    <div>
      <body className="aboutbody">
        <div className="about-hero">
          <h4>
            We have served over <span>150,000 farmers</span>  across <span>13 states </span> in Nigeria and
            have processed <span>hundreds of thousands</span> of transactions.
          </h4>
          <img src={Frame}/>
          <p>Trusted By Organisations Making Impact</p>
        </div>
        <div className="about-footer1">
            <img src={wenovation} />
            <img src={cari} />
            <img src={labana} />
            <img src={giz} />
            <img src={image} />

        </div>
        <div className="about-footer2">
            <img src={lead} />
            <img src={google} />
            <img src={katspull} />
            <img src={bain} />
            <img src={catalyst} />

        </div>
      </body>
    </div>
  );
}
export default About;
