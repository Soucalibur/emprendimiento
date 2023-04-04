import s from "../../css/modal.css"
const ModalYasmin = ()=>{

    const closeModal = (event)=>{
        event.preventDefault()
        const idModal = event.target.value
        const elementoCerrar = document.getElementById(idModal)
        elementoCerrar.style.display = "none"
    }

    return(
        <div className="firstContainerModal" id="modalYasmin">
            <h3>MODAL Yasmin</h3>
            <button onClick={closeModal} value="modalYasmin">Cerrar</button>
        </div>
    )
}

export default ModalYasmin