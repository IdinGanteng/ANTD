import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActivity, updateActivity } from '../service';

const ActivityDetail = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');

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
        } catch (error) {
            console.log(error);
        }
    };
    const handleCancelEdit = () => {
        setIsEditing(false);
        setNewTitle('');
    };
    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleSaveTitle}>Save</button>
                    <button onClick={handleCancelEdit}>cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{activity.title}</h3>
                    <button onClick={handleEditTitle}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default ActivityDetail