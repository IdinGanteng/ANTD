import React from 'react';
import img from '../Assets/activity-empty-state.png';
import { useState, useEffect} from 'react';
import axios from 'axios';
import CardActivity from '../components/CardActivity';
import { getActivity, deleteActivity, addActivity } from '../service';

const Dashboard = () => {
  const [activity, setActivity] = useState([0]);
  const [newActivity, setNewActivity]= useState('')

  useEffect(()=>{
    fetchActivity();
  },[]);
  const fetchActivity = async ()=>{
    try{
      const response = await getActivity();
      setActivity(response.data.data);
      console.log(response.data.data);
    } catch(error){
      console.error('Error fetching cards:', error);
    }
  }
  const handleAddAct = async ()=>{
    try{
      const response = await addActivity(newActivity);
      setNewActivity(response.data.data);
      fetchActivity();
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className='container-fluid text-center mt-3'>
      <div className='row'>
        <div className='col'>
          <h2>Activity</h2>
        </div>
        <div className='col'>
          <button className='btn-tambah' onClick={handleAddAct}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.99988V18.9999" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
            <p>Tambah</p>
          </button>
        </div>
      </div>
      <div>
        {/* <img src={img} alt='img' className='img-fluid mt-3'/> */}
        {activity.map((data)=>(
          <CardActivity
          key={data.id}
          title={data.title}
          date={data.created_at}
          
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard;