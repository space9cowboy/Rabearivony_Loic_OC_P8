import BookiImage from '../assets/BOOKI.png'
import SBImage from '../assets/sophie.png'
import KasaImage from '../assets/kasa-copie.png'
import MVGImage from '../assets/grimoire.png'


import CardProject from '../components/CardProject';

function Projets() {

 

  return (
    <>
    <div id="projets" className="wrapper">
      <h1 className="wrapper__project">PROJETS</h1>
      
      <div className="container">

      <input type="radio" name="slide" id="c1"  default checked/>
        <CardProject image={BookiImage} htmlForValue="c1" iconModal="1" />

        <input type="radio" name="slide" id="c2" />
        <CardProject image={SBImage} htmlForValue="c2" iconModal="2"/>

        <input type="radio" name="slide" id="c3" />
        <CardProject image={KasaImage} htmlForValue="c3" iconModal="3"/>

        <input type="radio" name="slide" id="c4" />
        <CardProject image={MVGImage} htmlForValue="c4" iconModal="4"/> 

      </div>
    </div>

   
</>
    
  );
  
}

export default Projets
