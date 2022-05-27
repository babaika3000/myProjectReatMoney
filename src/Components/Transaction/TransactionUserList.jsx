import React, {useEffect, useState} from 'react';
import Menu from "../../menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {fetchTransaction, getListUsers} from "../../features/thunks/transaction";
import debounce from "debounce";


const TransactionUserList = () => {

  const [donate, setDonate] = useState()
  const [recipientId, setRecipientId] = useState();
  const [name, setName] = useState()


  const dispatch = useDispatch();

  const usersList = useSelector((state) => state?.transaction?.usersList);

  const handleDonateChange = (e) => setDonate(e.target.value)
  const dispatchGetListUsers = async (text) => {
    await dispatch(getListUsers(text))
  }

  const onInputChange = (e) => {
    setName(e.target.value);
    setRecipientId(null);
  }

  useEffect(
    debounce(
      () => dispatchGetListUsers(name), 350),
    [name])

  const userName = (userListName) => {
    setName(userListName);
  }

  const requestTransaction = (data) => {
    dispatch(fetchTransaction(data));
  }
  const dataTransaction = {
    name,
    donate,
    recipientId,
    //correspondentId
  }
  return (
    <div className={"Transaction_Page"}>
      <Menu name={name}
            onChange={onInputChange}
            usersList={usersList}
            userName={userName}
            recipientId={setRecipientId}
        />

      <input placeholder={"Sum"} type="number" value={donate}
             onChange={handleDonateChange}/>
      <button
        onClick={() => requestTransaction(dataTransaction)}


      >Try</button>
    </div>
  );
};

// export default TransactionUserList;


export default TransactionUserList
