import React from "react";
import "./Modal.css";

type ModalProps = {
    visible: boolean,
    onClose?: Function,
}

const Modal: React.FunctionComponent<ModalProps> = ({ visible, onClose = null, children }) => {

    if (!visible) {
        return <span></span>
    }

    return (
        <div id="modal-wrapper">
            <div id="modal">
                <div id="modal-content">
                    {children}
                </div>
                <div id="close-button" onClick={() => onClose && onClose()}>
                    OK
                </div>
            </div>
        </div>
    )
}

export default Modal;
