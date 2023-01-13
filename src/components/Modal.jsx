import React from 'react';
import './Modal.css'

function Modal({ handleToggle }) {
    return <div className='my-modal'>

        <div className="my-modal-content">
            Modal
        </div>

        <div className='popup'>
            <span
                onClick={() => {
                    handleToggle()
                }}
            >&times;</span>
        </div>

    </div>;
}

export default Modal;
