import { useState } from "react"
import { useRef } from "react"
import s from "../css/contactUsForm.css"
import EmailJS from "./emailJS"

const Validate = (input)=>{
    let error = {}
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	if (!input.name || input.name?.trim() >= 1) {
		error.name = 'Introduzca su nombre';
	} else if (!regexEmail.test(input.email)) {
		error.email = 'Introduzca un email válido';
	} else if (!input.subject) {
		error.subject = 'Introduzca un servicio';
	}else if (!input.message.length) {
		error.message = 'Mensaje es requerido';
	}
	
    const sendButton = document.getElementById('sendButtom');

	if (Object.entries(error).length) {
		sendButton.disabled = true;
	} else {
		sendButton.disabled = false;
	}

    return error;
}


const ContactUsForm = ()=>{

    const form = useRef()

    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
        
    })

    const [error, setError] = useState()

    const introduceData = (event)=>{
        const {value, name} = event.target
        setInput({...input, [name]: value})
        setError(Validate({...input, [name]:value})) 
    }

    const sendData = (event)=>{
        event.preventDefault()
        if(!Object.entries(error).length){
            EmailJS(form)
            console.log("MENSAJE ENVIADO")
        }
    }

    

    return(
        
        <div className="thirdBlock"  id="contacto" >
            <form ref={form} onSubmit={sendData} className="containerForm">
                <h3 className="tituloForm">CONTÁCTENOS</h3>
                <input
                    name="name"
                    value={input.name}
                    onChange={introduceData}
                    placeholder="*NOMBRE"
                    autoComplete="off" 
                    className="inputNameForm"
                ></input>

                <input 
                    name="email" 
                    value={input.email} 
                    onChange={introduceData}
                    autoComplete='off'
                    placeholder="*CORREO"
                    className="inputEmailForm"
                />
                
                

                <input 
                    name="subject" 
                    value={input.subject} 
                    onChange={introduceData}
                    autoComplete='off'
                    placeholder="*SERVICIO" 
                    className="inputSubjectForm"
                    />
                
                {error && Object.entries(error).length ? <p className="errorInfo">{error.name || error.email || error.subject || error.message}</p> : ""}
                
                <button type="submit" id="sendButtom" disabled> ENVIAR MENSAJE</button>

                <textarea 
                    name="message" 
                    value={input.message} 
                    onChange={introduceData} 
                    autoComplete='off'
                    placeholder="*MENSAJE"
                    className="inputMessageForm"
                />
            </form>
        </div>
    )
}

export default ContactUsForm