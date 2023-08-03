import React from 'react';
import { Modal } from 'react-bootstrap';
import img from '../Assets/icon-alert.8a9d9385.svg'

const ModalConfirm = ({ show, onHide, onDelete, id,activityTitle}) => {
  const handleDelete = ()=>{
    onDelete(id)
  }
  return (
    <Modal show={show} onHide={onHide} centered>
    <Modal.Body>
      <div className='d-flex justify-content-around'>
        <img src={img} alt="img-alert"/>
      </div>
      <div className='d-flex justify-content-around text-center'>
      <p>Apakah anda yakin ingin menghapus activity <h5>"{activityTitle}"</h5></p>
      </div>
      <div className='d-flex justify-content-around' >
      <button onClick={onHide} className='btn-cancel'>Cancel</button>
      <button onClick={handleDelete} className='btn-delete-modal'>Delete</button>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default ModalConfirm