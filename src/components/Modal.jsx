import React from 'react';
import { useState } from 'react';
import './Modal.css'

function Modal({ handleToggle, instructorIdx, instructor, applyEdit }) {

    const [username, setUsername] = useState(instructor)
    function handleApplyEdit() {
        if (username.length > 0) {
            applyEdit(instructorIdx, username)
        }

    }

    return <div className='my-modal'>

        <div className="my-modal-content">
            <input className='form-control'
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                value={username}
            />
            <button className='btn btn-primary form-control' onClick={handleApplyEdit}>Apply</button>
        </div>

        <div className='popup'>
            <span
                onClick={() => {
                    handleToggle(null)
                }}
            >&times;</span>
        </div>

    </div>;
}

export default Modal;
