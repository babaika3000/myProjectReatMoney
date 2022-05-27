import axios from "../../utils/axios";
import {setToken} from "../../utils/localStorage";
import {deleteError, getError} from "../../app/Rudesers/LoginReducer";
import {userAuth} from "../../app/Rudesers/authReduser";


  export const loginUsers = (email, password) => async (dispatch) => {
    try {
      const response = await axios.post('/auth/login', {email, password});
      await setToken('accessToken', response.data.id_token);
      dispatch(userAuth(true))
      console.log('response', response);
      dispatch (deleteError())
    } catch (error) {
      console.error('[registerUser]: ', error);
      dispatch(
        getError(error.response.data.message)
      )
    }
  };
