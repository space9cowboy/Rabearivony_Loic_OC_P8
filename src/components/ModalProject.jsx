import PropTypes from 'prop-types'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useMediaQuery } from 'react-responsive'

function ModalProject({ onClick, project }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="modal-overlay" onClick={onClick.closeModal}>
      {isDesktopOrLaptop && (
        <div className="modal" onClick={e => e.stopPropagation()}>
          <span className="close-icon" onClick={onClick.closeModal}>X</span>
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
                  <div className='tag-unique' key={index}>{tag}</div>
                ))}
              </div>
              <h2>Visiter le site</h2>
              <a className="visitlink" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </div>
            <div className="deviceIphone">
              <DeviceFrameset device="iPhone X">
                <div className='deviceScroll'>
                  <img src={project.imageIphone} className="deviceImage" alt="iPhone view" />
                </div>
              </DeviceFrameset>
            </div>
          </div>
          <div className="deviceMac">
            <DeviceFrameset device="MacBook Pro">
              <div className='deviceScroll'>
                <img src={project.imageMac} className="deviceImage" alt="Mac view" />
              </div>
            </DeviceFrameset>
          </div>
        </div>
      )}

      {isTabletOrMobile && (
        <div className='modal-inside'>
          <h1 className='modalTitle'>{project.title}</h1>
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
              <div className='tag-unique' key={index}>{tag}</div>
            ))}
          </div>
          <h2>Visiter le site</h2>
          <a className="visitlink" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
        </div>
      )}
    </div>
  )
}

ModalProject.propTypes = {
  onClick: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  }).isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageIphone: PropTypes.string.isRequired,
    imageMac: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default ModalProject