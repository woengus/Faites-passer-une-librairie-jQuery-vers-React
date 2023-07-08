/**
 * Composant Modal pour afficher une superposition modale avec un message et un bouton de fermeture.
 */
import React from "react";

/**
 * Représente une superposition modale.
 * @returns {JSX.Element} La superposition modale.
 */
const Modal = ({ message, open, toggleModal }) => {
  const classCss = ["modal-overlay", open ? "open-modal" : ""].join(" ");
  return (
    <div className={classCss}>
      <style>
        {`
           .modal-overlay {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             justify-content: center;
             align-items: center;
             background-color: rgba(0, 0, 0, 0.5);
             z-index: 9999;
             display: none;
           }
           
           .modal-overlay.open-modal {
             display: flex;
           }
           
           .modal {
             width: 180px;
             height: 50px;
             background-color: #f0f0f0;
             border: 1px solid #ccc;
             border-radius: 4px;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             padding: 20px;
             background-color: aquamarine;
           }
           
           .modal p {
             margin: 0;
           }
           
           .modal button {
             background-color: transparent;
             border: none;
             cursor: pointer;
             padding: 0;
             color: #333;
             font-weight: bold;
             font-size: 18px;
             margin-top: 10px;
           }
         `}
      </style>
      <div className="modal">
        <p>{message}</p>
        <button onClick={() => toggleModal()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
