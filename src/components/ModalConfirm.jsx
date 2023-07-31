import React from 'react'

const ModalConfirm = ({onClose, onDelete}) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this activity?</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Close</button>
          <button onClick={onDelete} className="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirm