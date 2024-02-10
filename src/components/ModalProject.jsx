function ModalProject( onClick) {
  return (
         <div className="modal-overlay" onClick={onClick.closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Modal Title</h2>
              
              <span className="close-icon" onClick={onClick.closeModal}>X</span> {/* Croix pour fermer */}
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ultricies quam. Sed dignissim nulla in varius finibus. Mauris eget erat nisi.</p>
            
          </div>
        </div>
  )
}

export default ModalProject