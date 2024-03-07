import React from 'react';
import InfinitLogo from '../components/InfinitLogo';
// import LogoNode from '../assets/nodejs.png';
// import LogoPhp from '../assets/PHP1.png';
// import LogoMDB from '../assets/MDB.png';
// import LogoJS from '../assets/JSLOGO.jpg';
// import LogoReact from '../assets/react.png';
// import LogoSass from '../assets/SASS.png';
// import LogoGit from '../assets/gitt.png'
// import LogoGithub from '../assets/github.png'
// import LogoFigma from '../assets/figma.png'
// import LogoNotion from '../assets/notion.png'

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
          images={["/JSLOGO.jpg", "/react.png", "/SASS.png"]}
          centralText="Front-end"
          descriptions={frontEndDescriptions} // Passer les descriptions correspondantes
        />
        
        {/* Deuxième instance d'InfinitLogo avec les images Back-end et les descriptions correspondantes */}
        <InfinitLogo
          images={["/nodejs.png", "/PHP1.png", "/MDB.png"]}
          centralText="Back-end"
          descriptions={backEndDescriptions} // Passer les descriptions correspondantes
        />
      </div>
      <div className="tools">
        <h2 className="tools__name">Outils que j'utilise</h2>
        <div className="tools__container">
          
        <div className="tools__item">
            <img src="/gitt.png" alt="Logo Git" className='tools__img' />
            <p className="tool-description-git">Git</p>
          </div>
          <div className="tools__item">
            <img src="/github.png" alt="Logo Github" className='tools__img' />
            <p className="tool-description">Github</p>
          </div>
          <div className="tools__item">
            <img src="/figma.png" alt="Logo Figma" className='tools__img' />
            <p className="tool-description">Figma</p>
          </div>
          <div className="tools__item">
            <img src="/notion.png" alt="Logo Notion" className='tools__img' />
            <p className="tool-description">Notion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
