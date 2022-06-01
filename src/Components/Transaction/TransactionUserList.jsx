import React, {useEffect, useState} from 'react';
import Menu from "../../menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {fetchTransaction, getAllTransactions, getListUsers} from "../../features/thunks/transaction";
import debounce from "debounce";
import {setLoading} from "../../app/Rudesers/TransactionReducer";


const TransactionUserList = () => {

  const [amount, setAmount] = useState()
  const [recipientId, setRecipientId] = useState();
  const [name, setName] = useState()

  const dispatch = useDispatch();
  const dispatchGetAllTransactions = () => {
    dispatch(getAllTransactions())
  }

  const usersList = useSelector((state) => state?.transaction?.usersList);
  const correspondentId = useSelector((state) => state.userData.user.id);
  const transactionList = useSelector((state) => state.transaction.transactionList);
  const handleDonateChange = (e) => setAmount(e.target.value)
  const dispatchGetListUsers = async (text) => {
    await dispatch(getListUsers(text))
  }
  const onInputChange = (e) => {
    setName(e.target.value);
    setRecipientId(null);
  }
  const dispatchSetLoading = (data) => {
    dispatch(setLoading(data))
  }
  useEffect(
    debounce(
      () => dispatchGetListUsers(name), 350),
    [name])
  useEffect(
    () => {
      dispatchGetAllTransactions()
    }, [])
  useEffect(
    () => {
      dispatchSetLoading(false)
    }, [transactionList])


  const userName = (userListName) => {
    setName(userListName);
  }

  const requestTransaction = (data) => {
    dispatch(fetchTransaction(data));
  }
  const dataTransaction = {
    name,
    amount,
    recipientId,
    correspondentId
  }
  return (
    <div className={"Transaction_Page"}>
      <Menu name={name}
            onChange={onInputChange}
            usersList={usersList}
            userName={userName}
            recipientId={setRecipientId}
      />

      <input placeholder={"Sum"}
             type="number"
             value={amount}
             placeholder="Sum"
             onChange={handleDonateChange}/>
      <button
        onClick={() => requestTransaction(dataTransaction)}>
        Try
      </button>
    </div>
  );
};


export default TransactionUserList
