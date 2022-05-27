import axios from "../../utils/axios";
import {setToken} from "../../utils/localStorage";
import {userAuth} from "../../app/Rudesers/authReduser";

export const registerUser = ({username, password, email}) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/register', {username, password, email});
    setToken('accessToken', response.data.id_token);
    dispatch(userAuth(true))
  } catch (error) {
    // console.error('[registerUser]:',registerUser() );
  }
};
