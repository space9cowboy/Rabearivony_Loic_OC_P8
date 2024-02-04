function InfinitLogo({ images, centralText, descriptions }) {
  return (
    <div className='logo-container'>
      <div className='central-point'>
        <p>{centralText}</p>
      </div>
      <div className='ring'>
        {images.map((image, index) => (
          <div key={index} className={`logo logo-${index + 1}`}>
            <div className="text-descriptif">{descriptions[index]}</div> {/* Ajouter les textes descriptifs */}
            <img src={image} className="logo__img" alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      
    </div>
    
  );
}

export default InfinitLogo;
