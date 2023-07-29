import React from 'react';
import img from '../Assets/activity-empty-state.png';
import { useState, useEffect } from 'react';
import CardActivity from '../components/CardActivity';
import { getActivity, deleteActivity, addActivity } from '../service';

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchActivity();
  }, []);
  const handleDelete = async (id) => {
    try {
      // Panggil fungsi deleteActivity untuk menghapus aktivitas berdasarkan ID
      await deleteActivity(id);
      // Setelah berhasil menghapus, panggil kembali fungsi untuk mengambil data terbaru dari API
      fetchActivity();
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };
  const fetchActivity = async () => {
    try {
      const response = await getActivity();
      setActivity(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }
  const handleAddAct = async () => {
    try {
      const response = await addActivity({
        title: newActivity, // Gunakan state newActivity sebagai judul baru
        email: "kanggayus101@gmail.com",
      });
      setActivity([...activity, response.data]);
      setNewActivity('');
      console.log(response.data);
      // fetchActivity();
    } catch (error) {
      console.log(error);
    }
  }
  const filteredActivity = activity.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
    <div className='d-flex justify-content-around mt-3'>
      
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
                <CardActivity
                  key={data.id}
                  title={data.title}
                  date={data.created_at}
                  onDelete={handleDelete}
                  id={data.id}
                />
              ))
            )
          }
        </div>
    </>
  )
}

export default Dashboard;