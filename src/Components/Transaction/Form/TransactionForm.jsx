import React, {useEffect, useState} from 'react';
import Menu from "../../menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {fetchTransaction, getAllTransactions, getListUsers} from "../../features/thunks/transaction";
import debounce from "debounce";
import {setLoading} from "../../app/Rudesers/TransactionReducer";
import TransactionList from "./TransactionList";


const TransactionForm = () => {

  const [amount, setAmount] = useState()
  const [recipientId, setRecipientId] = useState();
  const [name, setName] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;


  const dispatch = useDispatch();
  const dispatchGetAllTransactions = () => {
    dispatch(getAllTransactions())
  }
  const balance = useSelector((state) => state.userData.user.balance);
  const correspondentId = useSelector((state) => state.userData.user.id);
  const isLoading = useSelector((state) => state.transaction.isLoading);
  const usersList = useSelector((state) => state?.transaction?.usersList);
  const transactionList = useSelector((state) => state.transaction.transactionList);
  const transactionError = useSelector((state) => state.transaction.transactionError);
  const handleDonateChange = (e) => setAmount(e.target.value)
  const dispatchGetListUsers = async (text) => {
    await dispatch(getListUsers(text))
  }
  const handleClick = (number) => {
    setCurrentPage(number)
  }
  const onRetry = async (item, isRetry, correspondentId) => {
    const {recipient_id, amount, name} = item;
    const userData = {
      recipientId: recipient_id,
      amount,
      name,
      correspondentId
    }
    requestTransaction(userData);
  };
  const renderPageNumbers = () => {
    const pageNumber = [];
    if (transactionList.length > 5) {
      for (let i = 1; i <= Math.ceil(transactionList.length / todosPerPage); i++) {
        pageNumber.push(i)
      }
      return (<ul className="Page_List">
        {pageNumber.map(number => {
          return (
            <li className="Page_List_Item" id={number} key={number}
                onClick={() => handleClick(number)}> {number}</li>
          );
        })}
      </ul>)
    }
  }

  const renderList = () => {
    const indexOfLastPage = currentPage * todosPerPage;
    const indexOfFirstPage = indexOfLastPage - todosPerPage;
    return transactionList.slice(indexOfFirstPage, indexOfLastPage)
  }
  const setRetryButtonState = () => {
    if (balance <= 0) {
      return true
    }
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
  const setButtonState = () => {
    if (!name) {
      return true
    }
    if (!recipientId) {
      return true
    }
    if (!amount) {
      return true
    }
    if (isLoading) {
      return true
    }
    if (amount <= 0 || amount > balance) {
      return true
    }
    return name === '';
  };
  return (
    <div>
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
          onClick={() => requestTransaction(dataTransaction)}
          disabled={setButtonState()}>
          Try
        </button>
      </div>
      <TransactionList
        transactionList={renderList()}
        correspondentId={correspondentId}
        onRetry={onRetry}
        setButtonState={setRetryButtonState}
      />
      {renderPageNumbers()}
    </div>
  );
};


export default TransactionForm
