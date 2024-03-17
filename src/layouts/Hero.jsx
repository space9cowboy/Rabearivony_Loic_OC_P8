import React, { useRef} from 'react'
import HeroAnimationText from '../components/HeroAnimationText'
import { FaGithub } from "react-icons/fa6";
import { LuHardDriveDownload } from "react-icons/lu";


function Hero() {

    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
  
      const centerX = width / 2;
      const centerY = height / 2;
  
      const offsetX = (x - centerX) / centerX;
      const offsetY = (centerY - y) / centerY;

      const maxRotate = 30; 
  
      imgRef.current.style.transform = `perspective(1000px) rotateX(${-offsetY * maxRotate}deg) rotateY(${offsetX * maxRotate}deg)`
    };
  
    const handleMouseLeave = () => {
      imgRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

  return (
    <div  id="accueil" className="hero">
        
        <div className="hero__gap">
          <div className='hero__Left'>
              <span className="hero__hello">Bonjour,</span> <br />
              <span className="hero__name"> Je suis <span className='hero__nameColor'>Loïc</span></span>
              <HeroAnimationText />
              <span className="hero__info">"Transformer des idées en expériences web exceptionnelles - Développeur passionné créant des solutions innovantes pour un monde connecté."</span>
              <div className='hero__contact'>
                
                <a className='btn btnLink' href="https://github.com/space9cowboy"><FaGithub /><span>Github</span></a>
                <a className='btn btnLink' href="https://drive.google.com/file/d/1JHtmMUGoWx5yzDoVasf5YUhyoJ5deIRG/view?usp=drive_link"  ><LuHardDriveDownload /><span>CV</span></a>
              </div>
          </div>
          <div className="hero__Right">
          
              <div className='hero__Img' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={imgRef}>
                  <img src="/tsanta_ai.webp" alt="logo loïc" className='hero__Logo'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero