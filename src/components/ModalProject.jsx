import PropTypes from 'prop-types';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'


function ModalProject({ onClick, project }) {
    return (
      <div className="modal-overlay" onClick={onClick.closeModal}>
        <div className="modal"  onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{project.title}</h2>
            <span className="close-icon" onClick={onClick.closeModal}>X</span>
          </div>
          {/* <p>{project.content}</p> */}
          <div className='modal-inside'>
              <h3>Mission : </h3>
              <p>{project.mission}</p>
              <h3>Compétences mises en oeuvres : </h3>
              <ul className='skills-list'>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
              <h3>Commentaires : </h3>
              <p>{project.comments}</p>
              <h3>Technologies utilisés : </h3>
              <ul className='skills-list'>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          
          <div className="device">
              <div className="deviceIphone">
                  <DeviceFrameset device="iPhone X"  >
                    <div className='deviceScroll'>
                        <img src={project.imageIphone} className="deviceImage"/>
                    </div>
                    </DeviceFrameset>
              </div>
                 <div className="deviceMac">
                    <DeviceFrameset device="MacBook Pro"  >
                    <div className='deviceScroll'>
                        <img src={project.imageMac} className="deviceImage"/>
                    </div>
                    </DeviceFrameset>
                 </div>
          </div>

              <h3>Visiter le site : </h3>
              <p>{project.link}</p>
          </div>
          

          
        </div>
      </div>
    );
  }

  ModalProject.propTypes = {
    onClick: PropTypes.shape({
      closeModal: PropTypes.func.isRequired,
    }).isRequired,
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      mission: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      comments: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      imageIphone : PropTypes.string.isRequired,
      imageMac : PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
     
    }).isRequired,
  };
  
  export default ModalProject;
  