import axios from "../../utils/axios";
import {dataUser} from "../../app/Rudesers/UserDataReducer";

export const getUserInfoData = () => async (dispatch) => {
  try {
    const response = await axios.get('/protected/user-info');
    dispatch(
      dataUser(response.data.user_info_token),
    );
  } catch (error) {
    console.error('[registerUser]: ', error);
  }
};
