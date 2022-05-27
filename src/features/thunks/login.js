import axios from "../../utils/axios";
import {setToken} from "../../utils/localStorage";


export const loginUsers = (email, password) => async () => {
  try {
    const response = await axios.post('/auth/login', {email, password});
    await setToken('accessToken', response.data.id_token, response.ma);
  }catch (error){console.log('@@@@', error);}
}
