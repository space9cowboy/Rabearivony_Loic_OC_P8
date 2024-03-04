import { useState } from 'react'

import ButtonContact from '../components/ButtonContact';
import ModalProject from '../components/ModalProject';
import projects from '../assets/Projects.json'


function CardProject (card)  {

 

  const [modalOpen, setModalOpen] = useState(false);
   
  const project = projects.find(p => p.id.toString() === card.iconModal);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  
  return (
      <>
    
        <label htmlFor={card.htmlForValue} className="card" >
        
            <div className="row"   style={{
             background : `url(${card.image}) no-repeat `,
              height : "100%",
              width : "100%",
              backgroundSize : "cover",
              
              }}>
            
              <div className="icon">{card.iconModal}</div>
               
                  <center className='marginbottom'>
                    <ButtonContact withIconOpen={true}onClick={openModal}  text="Voir plus"/>
                  </center>
            </div>
        </label>

        {/* MODAL 1 */}
        {modalOpen && (
        <ModalProject  onClick={{ closeModal }} project={project}  />
        
      )}
  </>)
}

export default CardProject