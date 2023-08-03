import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActivity, updateActivity } from '../service';

const ActivityDetail = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        fetchActivityDetail();
    }, []);
    const fetchActivityDetail = async () => {
        try {
            const response = await getActivity(id);
            const data = response.data; // Simpan array data dari respon API
            const foundActivity = data.find((activity) => activity.id === parseInt(id));
            if (foundActivity) {
                setActivity(foundActivity);
                setNewTitle(foundActivity.title);
            } else {
                console.log('Activity not found');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleEditTitle = () => {
        setIsEditing(true);
    };
    const handleSaveTitle = async () => {
        try {
            await updateActivity(id, { title: newTitle });
            setActivity((prevActivity) => ({
                ...prevActivity,
                title: newTitle,
            }));
            setIsEditing(false);
            setNewTitle('');
            navigate(`/activity-detail/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
    const handleCancelEdit = () => {
        setIsEditing(false);
        setNewTitle('');
    };
    return (
        <div className='d-flex justify-content-around mt-3'>
            {isEditing ? (
                <div>
                    <input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="input-h1"
                    />
                    <button onClick={handleSaveTitle} className="btn-delete">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33331 17.1663H6.66665L15.4166 8.41627C15.8587 7.97424 16.107 7.37472 16.107 6.7496C16.107 6.12448 15.8587 5.52496 15.4166 5.08293C14.9746 4.64091 14.3751 4.39258 13.75 4.39258C13.1249 4.39258 12.5253 4.64091 12.0833 5.08293L3.33331 13.8329V17.1663Z" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.25 5.91602L14.5833 9.24935" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button onClick={handleCancelEdit} className="btn-cancel">cancel</button>
                </div>
            ) : (
                <div className='d-flex justify-content-around'>
                    <h1>{activity.title}</h1>
                    <button onClick={handleEditTitle} className="btn-delete">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33331 17.1663H6.66665L15.4166 8.41627C15.8587 7.97424 16.107 7.37472 16.107 6.7496C16.107 6.12448 15.8587 5.52496 15.4166 5.08293C14.9746 4.64091 14.3751 4.39258 13.75 4.39258C13.1249 4.39258 12.5253 4.64091 12.0833 5.08293L3.33331 13.8329V17.1663Z" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.25 5.91602L14.5833 9.24935" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            )}
            <div>
                <button className='btn-tambah'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4.99988V18.9999" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    <p>Tambah</p>
                </button>
            </div>
        </div>
    )
}

export default ActivityDetail