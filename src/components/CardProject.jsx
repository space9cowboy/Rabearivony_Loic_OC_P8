import { useState } from 'react'

import ButtonContact from '../components/ButtonContact';
import ModalProject from '../components/ModalProject';

function CardProject (card)  {
    const [modalOpen, setModalOpen] = useState(false);

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
              
               
                  <ButtonContact onClick={openModal}  text="Open me"/>
               
               
            </div>
        </label>

        {/* MODAL 1 */}
        {modalOpen && (
        <ModalProject closeModal={closeModal} />
        
      )}
  </>)
}

export default CardProject