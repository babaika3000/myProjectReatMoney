import React from 'react';


const TransactionList = (props) => {
  const {transactionList, correspondentId, onRetry,setButtonState} = props;
  // const changeButton = () => setButtonState() ? "Transaction_Retry" : "Transaction_Retry_Active";
  return (
    <div className="Transaction_Item_Wrapper">
      {transactionList.map(item => (
        <div className={"Transaction_Item"} key={item.id}>
          {/*{isLoading ? <Skeleton width={190} height={150}/> : <img alt="icon" src={cashIcon}/>}*/}
          <div>
            <span> {"Correspondent Name:" + item.name}</span>
            <span> { "Date/Time of the transaction:" + item.date}></span>
            <span>{"Transaction amount, (Debit/Credit for PW transferred):" + item.amount}></span>
            <span> {"Balance:" + item.balance}></span>
          </div>
          <button
            // className={changeButton()}
                  disabled={setButtonState()}
                  onClick={() => onRetry(item, true, correspondentId)}
          > RETRY
          </button>
        </div>
      ))}</div>
  )
}

export default TransactionList;
