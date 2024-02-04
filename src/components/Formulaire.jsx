import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ButtonContact from './ButtonContact';


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

  return (
    <div className="contact-container">
      <div className="left-section">
        <h1>Me contacter</h1>
        <p>N'hésitez pas à me contacter via ce formulaire</p>
            <p>ou m'appeler via le : </p>

           <p> + 33 6 30 63 32 67 </p>
        
        <img src="contact-image.jpg" alt="Contact" />
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
