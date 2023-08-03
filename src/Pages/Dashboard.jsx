import React from 'react';
import img from '../Assets/activity-empty-state.png';
import { useState, useEffect } from 'react';
import { getActivity, deleteActivity, addActivity } from '../service';
import ModalConfirm from '../components/ModalConfirm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  useEffect(() => {
    fetchActivity();
  }, []);
  const handleDeleteCard = async () => {

    try {
      if (selectedId) {
        await deleteActivity(selectedId);
        fetchActivity();
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };
  const fetchActivity = async () => {
    try {
      const response = await getActivity();
      setActivity(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }
  const handleAddAct = async () => {
    try {
      const response = await addActivity({
        title: newActivity,
        email: "kanggayus101@gmail.com",
      });
      setActivity([...activity, response.data]);
      setNewActivity('');
    } catch (error) {
      console.log(error);
    }
  };
  function formatCreatedAt(created_at) {
    const date = new Date(created_at);
    return date.toLocaleString(); // Adjust the format as you desire
  }
  const navigate = useNavigate();
  return (
    <>
      <div className='d-flex justify-content-around mt-3'>
        <ModalConfirm
          show={showModal}
          onHide={()=>setShowModal(false)}
          onDelete={handleDeleteCard}
          activityTitle={selectedTitle}
          
        />
        <div>
          <h2>Activity</h2>
        </div>
        <div>
          <button className='btn-tambah' onClick={handleAddAct}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.99988V18.9999" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
            <p>Tambah</p>
          </button>
        </div>
      </div>
      <div className='card-container'>
        {
          activity.length === 0 ? (
            <img src={img} alt='img' className='img-fluid mt-3 d-flex' />
          ) : (
            activity.map((data) => (
              <div key={data.id} className="card-activity" onClick={()=>navigate(`/activity-detail/${data.id}`)}>
                <h3>{data.title}</h3>
                <p>{formatCreatedAt(data.created_at)}</p>
                <button className="btn-delete" onClick={(e)=>{
                  e.stopPropagation();
                  setSelectedId(data.id);
                  setSelectedTitle(data.title);
                  setShowModal(true);
                }}>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H17" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 9V15" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 9V15" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            ))
          )
        }
      </div>
      
    </>
  )
}

export default Dashboard;