
import  { useState } from 'react';

import BookiImage from '../assets/BOOKI.png'
import SBImage from '../assets/sophie.png'
import KasaImage from '../assets/kasa-copie.png'
import MVGImage from '../assets/grimoire.png'
import ButtonContact from '../components/ButtonContact';



function projets() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="wrapper">
      <h1 className="wrapper__project">PROJETS</h1>
      
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card" onClick={openModal}>
        
            <div className="row"   style={{
             background : `url(${BookiImage}) no-repeat `,
              height : "100%",
              backgroundSize : "cover",
              
              }}>
            
              <div className="icon">1</div>
              
              <div className="description">
                
                <h4>Booki</h4>
                <p>Intégration, HTML, CSS</p>
               
              </div>
            </div>

           
           
          
        </label>

        {/* MODAL 1 */}
        {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Modal Title</h2>
              
              <span className="close-icon" onClick={closeModal}>X</span> {/* Croix pour fermer */}
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ultricies quam. Sed dignissim nulla in varius finibus. Mauris eget erat nisi.</p>
            <ButtonContact className="close-btn" onClick={closeModal} text="Close"/>
          </div>
        </div>
      )}
    
  

        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          
          <div className="row" style={{
             background : `url(${SBImage}) no-repeat `,
              height : "100%",
              backgroundSize : "contain",
              backgroundColor : "white",
              
              
              }}>
            <div className="icon">2</div>
            <div className="description">
              <h4>Sophie Bluel - Architecte d'intérieur</h4>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </div>
        </label>


        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row" style={{
             background : `url(${KasaImage}) no-repeat `,
              height : "100%",
              backgroundSize : "cover",
              }}>
            <div className="icon">3</div>
            <div className="description">
              <h4>Kasa</h4>
              <p>Frontend, React</p>
            </div>
          </div>
        </label>


        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row" style={{
             background : `url(${MVGImage}) no-repeat `,
              height : "100%",
              backgroundSize : "cover",
              
              
              
              }}>
            <div className="icon">4</div>
            <div className="description">
              <h4>Mon Vieux Grimoire</h4>
              <p>Node, Express, MongoDB</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
  
}

export default projets
