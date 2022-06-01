import axios from '../../../src/utils/axios'
import {setListUsers, setLoading, getError, setTransactionData} from "../../app/Rudesers/TransactionReducer";
import {getUserInfoData} from './userData'

export const createTransaction = ({name, amount, recipientId, correspondentId}) => async (dispatch) => {
  try {
    await axios.post('protected/transactions', {name, amount, recipientId, correspondentId});
    dispatch(
      getError(false)
    )
  } catch (error) {
    dispatch(
      getError(error.response.data.message)
    )
  }
};
export const fetchTransaction = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await dispatch(createTransaction(data))
    await dispatch(getUserInfoData())
    await dispatch(getAllTransactions())
  } catch (error) {
    console.log('@@@@', error);
  }
}
export const getAllTransactions = () => async (dispatch) => {
  try {
    const response = await axios.get('protected/transactions');
    dispatch(
      setTransactionData(response.data.trans_token),
    );
  } catch (error) {
    console.error('[registerUser]: ', error);
  }
};
export const getListUsers = (text) => async (dispatch) => {
  const response = await axios.post('/protected/users/list', {filter: text});
  dispatch(
    setListUsers(response.data),
  );
};

//
//     await dispatch(createTransaction(data))
//     await dispatch(getAllTransactions())
//     dispatch(
//       setLoading(false)
//     )
//   }catch(error) {
//     dispatch(
//       getError(error.response.data.message)
//     )
//     console.log('@@@',error);
//   }
// };
