import PropTypes from 'prop-types';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'


function ModalProject({ onClick, project }) {
    return (
      <div className="modal-overlay" onClick={onClick.closeModal}>
        <div className="modal"  onClick={(e) => e.stopPropagation()}>
          {/* <div className="modal-header">
           
           
          </div> */}
          <span className="close-icon" onClick={onClick.closeModal}>X</span>
          {/* <p>{project.content}</p> */}
          <div className="modal-form">
              <div className='modal-inside'>
              <h1>{project.title}</h1>
                  <h2>Mission</h2>
                  <p>{project.mission}</p>
                  <h2>Compétences mises en oeuvres</h2>
                    <ul className='skills-list'>
                    {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
                    </ul>
                  <h2>Commentaires</h2>
                  <p>{project.comments}</p>
                  <h2>Technologies utilisés</h2>
                  <div className='tag-list'>
                    {project.tags.map((tag, index) => (
                  <div className='tag-unique'key={index}>{tag}</div>
                ))}
                    </div>
              
              {/* <div className="device">
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
              </div> */}
                  <h2>Visiter le site</h2>
                  <p>{project.link}</p>
              </div>
              <div className="deviceIphone">
                <DeviceFrameset device="iPhone X"  >
                    <div className='deviceScroll'>
                            <img src={project.imageIphone} className="deviceImage"/>
                    </div>
                </DeviceFrameset>
              </div>
                  
            </div>

                    <div className="deviceMac">
                        <DeviceFrameset device="MacBook Pro"  >
                        <div className='deviceScroll'>
                            <img src={project.imageMac} className="deviceImage"/>
                        </div>
                        </DeviceFrameset>
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
  