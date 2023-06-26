/**
 * Composant Modal pour afficher une superposition modale avec un message et un bouton de fermeture.
 */
import React from "react";

/**
 * Représente une superposition modale.
 * @returns {JSX.Element} La superposition modale.
 */
const Modal = ({ isModalOpen, closeModal }) => {
  const classCss = ["modal-overlay", isModalOpen ? "open-modal" : ""].join(" ");
  return (
    <div className={classCss}>
      <div className="modal">
        <p>Employee created !</p>
        <button onClick={closeModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
