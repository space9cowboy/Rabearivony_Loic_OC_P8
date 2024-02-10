import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ButtonContact from './ButtonContact';
import Contact from '../assets/contact.png'


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pfjoerr', 'template_zbzaf13', form.current, 'tJK8O33U6tS9kWDUv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
    <div className="contact-container">
      <div className="left-section">
        <h1>Me contacter</h1>
        <p>N'hésitez pas à me contacter via ce formulaire</p>
            <p>ou m'appeler via le : </p>

           <p> + 33 6 30 63 32 67 </p>
        
        <div className="contact1"  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={imgRef}>
            <img src={Contact}  className="contactimg" alt="Contact" />
        </div>
      </div>
      <div className="right-section">
        <form onSubmit={sendEmail}>
          <label htmlFor="user_name">Nom</label>
          <input type="text" name="user_name" id="user_name" />
          <textarea name="name" id="name" placeholder='Daft Punk' />

          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" />
          <textarea name="email" id="email" placeholder='example@gmail.com' />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Veuillez écrire votre message ici..." />

          <ButtonContact text="Submit" buttonStyle="btnform" />
        </form>
      </div>
    </div>
  );
};



export default ContactUs;
