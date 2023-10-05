import './Modal.scss'

interface IProp {
    isOpen: boolean
    closeModal: Function
    width?: string
    height?: string
    children: any
}
const Modal = ({ isOpen, children, closeModal, width, height }: IProp) => {
    const handleClick = () => {
        closeModal()
    }

    const style = {
        width: width ? width : 'auto',
        height: height ? height : 'auto',
    }
    if (!isOpen) return null

    return (
        <div className="modal">
            <div className="modal-bg" onClick={handleClick}>
                <div className="modal-content" style={style} onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={handleClick}>
                        <i className="las la-times"></i>
                    </button>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
