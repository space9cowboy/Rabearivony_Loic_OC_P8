import React from 'react';
import InfinitLogo from '../components/InfinitLogo';


function Skills() {
  const frontEndDescriptions = ["JavaScript", "React", "Sass"]; // Descriptions pour le Front-end
  const backEndDescriptions = ["Node.js", "PHP", "MongoDB"]; // Descriptions pour le Back-end
  const toolsDescriptions = ["Git", "Github", "Figma", "Notion"];

  return (
    <div id="competences" className='skills'>
      <h1 className='skills__title'>COMPÉTENCES</h1>
      
      <div className="skills__logo">
        {/* Première instance d'InfinitLogo avec les images Front-end et les descriptions correspondantes */}
        <InfinitLogo
          images={["/JSLOGO.webp", "/react.webp", "/SASS.webp"]}
          centralText="Front-end"
          descriptions={frontEndDescriptions} // Passer les descriptions correspondantes
        />
        
        {/* Deuxième instance d'InfinitLogo avec les images Back-end et les descriptions correspondantes */}
        <InfinitLogo
          images={["/nodejs.webp", "/PHP1.webp", "/MDB.webp"]}
          centralText="Back-end"
          descriptions={backEndDescriptions} // Passer les descriptions correspondantes
        />
      </div>
      <div className="tools">
        <h2 className="tools__name">Outils que j'utilise</h2>
        <div className="tools__container">
          
        <div className="tools__item">
            <img src="/gitt.webp" alt="Logo Git" className='tools__img' />
            <p className="tool-description-git">Git</p>
          </div>
          <div className="tools__item">
            <img src="/github.webp" alt="Logo Github" className='tools__img' />
            <p className="tool-description">Github</p>
          </div>
          <div className="tools__item">
            <img src="/figma.webp" alt="Logo Figma" className='tools__img' />
            <p className="tool-description">Figma</p>
          </div>
          <div className="tools__item">
            <img src="/notion.webp" alt="Logo Notion" className='tools__img' />
            <p className="tool-description">Notion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
