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
      <div className="modal">
        <p>{message}</p>
        <button onClick={() => toggleModal()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
