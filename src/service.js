import axios from 'axios';



const url1 = "https://todo.api.devcode.gethired.id/activity-groups?email=kanggayus101%40gmail.com";


export const getActivity = async (id) => {
    return await axios.get(`${url1}/${id}`);
}
// export const addImage = async (image) => {
//     return await axios.post(url1,image);
// }
export const addActivity = async () => {
    return await axios.post(`${url1}/`,
        {
            title:"jancok",
            email:"kanggayus101@gmail.com"
        }
    );
}
// export const editUser = async (id, user) => {
//     return await axios.put(`${url1}/${id}`,user);
// }
// export const deleteActivity = async(id)=>{
//     return await axios.delete(`${url}/${id}`)
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${url}/${id}`)