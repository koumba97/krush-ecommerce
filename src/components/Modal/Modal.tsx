import { useState } from 'react'
import './Modal.scss'

interface IProp {
    isOpen: boolean
    closeModal: Function
    children: any
}
const Modal = ({ isOpen, children, closeModal }: IProp) => {
    const closeModall = () => {
        closeModal()
    }

    if (!isOpen) return null

    return (
        <div className="modal" onClick={() => closeModall()}>
            <div className="modal-bg">
                <div className="modal-content">
                    <button onClick={() => closeModall()}>Close Modal</button>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
