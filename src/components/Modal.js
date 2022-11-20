import React from "react";
import "./Modal.css"

export default function Modal({ user, removeUser, closeModal }) {
    return (
        <div className="modalBackGround">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}> X </button>
                <div className="title">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="body">
                    <p>You have choosen {user?.name} to Delete</p>
                </div>
                <div className="footer">
                    <button className={"removeBtn"} onClick={() => {
                        removeUser(user)
                        closeModal(false)
                    }
                    }>Delete</button>
                </div>
            </div>
        </div>
    )

}