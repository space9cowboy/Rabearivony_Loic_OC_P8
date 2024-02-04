import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text-js';

const AnimationComponent = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    textRefs.current.forEach((textRef) => {
      const split = new SplitText(textRef, { type: 'chars' });
      const chars = split.chars;

      timeline.from(chars, {
        opacity: 0,
        y: 40,
        rotateX: -90,
        duration: 1,
        stagger: .02,
      });

      timeline.to(chars, {
        opacity: 0,
        y: -40,
        rotateX: 90,
        duration: 1,
        stagger: .02,
      });

      timeline.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0,
      });

      timeline.set(textRef, { opacity: 0 }); // Réinitialise l'opacité du texte
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div>
      <p ref={(el) => (textRefs.current[0] = el)}>Web Developper</p>
      <p ref={(el) => (textRefs.current[1] = el)}>UI Designer</p>
      <p ref={(el) => (textRefs.current[2] = el)}>Frontender</p>
      <p ref={(el) => (textRefs.current[3] = el)}>Human After All</p>
    </div>
  );
};

export default AnimationComponent;
