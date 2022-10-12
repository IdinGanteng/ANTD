import axios from "axios";
const BASE_PATH = "https://nodejs-backend-api-playground.herokuapp.com"

export const userRegistration = async(payload,navigate) => {
     try {
       const registration = await axios.post(`${BASE_PATH }/auth/user/registration`, payload);
       navigate("/table")
      //  console.log(registration.data.data)
      alert(registration.data.message)
     }catch (error){
       console.log(error.response.data);
      alert(error.response.data.message)
     }
    };