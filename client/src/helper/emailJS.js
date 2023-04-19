import emailjs from 'emailjs-com';
import ContactUsForm from './contactUsForm';

const EmailJS = (form)=>{

    emailjs.sendForm('service_whuelqj', 'ContactPointEmailJS', form.current, '9phUVeXmt1vnt_ANR')
      .then((result) => {
          console.log("Mensaje Enviado. Gracias amigo :D");
      }, (error) => {
          console.log(error.text);
      });
}

export default EmailJS