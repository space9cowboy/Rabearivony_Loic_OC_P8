import { useState, useEffect } from 'react';
import ButtonContact from '../components/ButtonContact';
import ModalProject from '../components/ModalProject';

function CardProject(card) {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Projects.json');
        if (!response.ok) {
          throw new Error(`Erreur de chargement du fichier : ${response.status}`);
        }
        const projectsData = await response.json();
        console.log('Projets récupérés avec succès :', projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Erreur lors du chargement des projets :', error.message);
      }
    };
    fetchData();
  }, []);

  const project = projects.find(p => p.id.toString() === card.iconModal);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <label htmlFor={card.htmlForValue} className="card">
        <div className="row" style={{
          background: `url(${card.image}) no-repeat `,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}>
          <div className="icon">{card.iconModal}</div>
          <center className='marginbottom'>
            <ButtonContact withIconOpen={true} onClick={openModal} text="Voir plus" />
          </center>
        </div>
      </label>
      {modalOpen && (
        <ModalProject onClick={closeModal} project={project} />
      )}
    </>
  );
}

export default CardProject;
