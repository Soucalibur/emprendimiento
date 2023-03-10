import emailjs from 'emailjs-com';

const EmailJS = (form)=>{

    emailjs.sendForm('service_whuelqj', 'ContactPointEmailJS', form.current, '9phUVeXmt1vnt_ANR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

export default EmailJS