import axios from 'axios';


const baseURL = 'https://todo.api.devcode.gethired.id';
const api = axios.create({
    baseURL,
  });
const url1 = "https://todo.api.devcode.gethired.id/activity-groups?email=kanggayus101%40gmail.com";

export const getActivity = async () => {
    try {
      const response = await api.get('/activity-groups', {
        params: {
          email: 'kanggayus101@gmail.com', // Set the email as a query parameter
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
// export const getActivity = async () => {
//     return await axios.get(`${url1}/`);
// }
// export const addImage = async (image) => {
//     return await axios.post(url1,image);
// }
export const addActivity = async () => {
    return await axios.post(`${url1}/`,
        {
            title:"New Activity",
            email:"kanggayus101@gmail.com"
        }
    );
}
export const deleteActivity = async (id) => {
    try {
      const response = await api.delete(`/activity-groups/${id}`);
      return response.data;
    } catch (error) {
        console.log(error.message);
      throw error;
    }
  };