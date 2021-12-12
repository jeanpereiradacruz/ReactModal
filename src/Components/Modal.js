import React from 'react'
import './Modal.css'

export const Modal = ({ openModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="closeButtonArea">
                    <button className="closeButton" onClick={() => openModal(false)}> X </button>
                </div>

                <div className="title">
                    <h1>You have reached the point of no return. Be careful!</h1>
                    <hr />
                </div>

                <div className="body">
                    <h2>This is the modal Body. There is nothing important here.
                        But thanks for reading my code.</h2>
                </div>
                <div className="footer">
                    <button className="confirmButton" onClick={() => openModal(false)}>Confirm</button>
                    <button className="cancelButton" onClick={() => openModal(false)}>Cancel</button>
                </div>
            </div>
        </div >
    )
}