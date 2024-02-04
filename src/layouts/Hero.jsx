import React, { useRef} from 'react'
import logo from '../assets/tsanta_ai.png'
import InfinitText from '../components/InfinitText'
import HeroAnimationText from '../components/HeroAnimationText'

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
    <div className="hero">
        <div className="hero__Top">
            <InfinitText />
        </div>
        <div className="hero__gap">
          <div className='hero__Left'>
              <span className="hero__hello">Hello,</span> <br />
              <span className="hero__name"> I'm <span className='hero__nameColor'>Loïc</span></span>
              <HeroAnimationText />
              <span className="hero__info">"Turn ideas into exceptional web experiences - Passionate developer crafting innovative solutions for a connected world."</span>
          </div>
          <div className="hero__Right">
          
              <div className='hero__Img' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={imgRef}>
                  <img src={logo} alt="logo loïc" className='hero__Logo'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero