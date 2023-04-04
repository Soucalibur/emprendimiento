import s from "../../css/modal.css"
const ModalTobias = ()=>{

    const closeModal = (event)=>{
        event.preventDefault()
        const idModal = event.target.value
        const elementoCerrar = document.getElementById(idModal)
        elementoCerrar.style.display = "none"
    }

    return(
        <div className="firstContainerModal" id="modalTobias">
            <h3>MODAL Tobias</h3>
            <button onClick={closeModal} value="modalTobias">Cerrar</button>
        </div>
    )
}

export default ModalTobias