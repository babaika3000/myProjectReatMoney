import axios from '../../../src/utils/axios'
import {setListUsers,setLoading,} from "../../app/Rudesers/TransactionReducer";
import {getUserInfoData} from './userData'


export const fetchTransaction = (data) => async (dispatch) => {
  try {dispatch(setLoading(true)
    )
    // await dispatch(createTransaction(data))
    await dispatch(getUserInfoData())
  }catch (error){
    console.log('@@@@', error);}
}
export const getListUsers = (text) => async (dispatch) => {
  const response = await axios.post('/protected/users/list', {filter: text});
  dispatch(
    setListUsers(response.data),
  );
};
