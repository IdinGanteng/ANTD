import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardActivity = ({ title, date, id, onDelete }) => {
  const formattedDate = new Date(date).toLocaleString();
  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  }
  const handleCardClick=()=>{
    navigate(`/activity-detail/${id}`);
  }
  return (
    <div className='card-activity' onClick={handleCardClick}>
      <h3>{title}</h3>
      <p>{formattedDate}</p>
      <button onClick={handleDelete} className="btn-delete">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H17" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 9V15" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 9V15" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default CardActivity;