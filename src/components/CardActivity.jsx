import React from 'react';

const CardActivity = ({title,date, id, onDelete}) => {
    const formattedDate = new Date(date).toLocaleString();
  return (
    <div className='card-activity'>
        <h3>{title}</h3>
        <p>{formattedDate}</p>
        <p>{id}</p>
    </div>
  )
}

export default CardActivity