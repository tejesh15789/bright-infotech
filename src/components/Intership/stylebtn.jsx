import React,{useState} from "react";
import "./stylebtn.css"
import Modal from "react-modal"
import Formcard from "../common/form/form";


const Stylebtn = () => {
    const [isOpen ,setOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isOpen} style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.5)' } }} onRequestClose={() => setOpen(false)} className='modalform d-flex justify-content-center align-items-center'>
                <Formcard setClose={setOpen} />
            </Modal>

            <button class="button2" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                </svg>
                Enrole Now
            </button>
        </>
    )
}

export default Stylebtn;