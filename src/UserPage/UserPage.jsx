import React, {useEffect} from 'react';
import classes from './UserPage.module.css'
import {useHistory, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfoData} from "../features/thunks/userData";
import {deleteToken} from "../utils/localStorage";
import {authReducer, userAuth} from "../app/Rudesers/authReduser";
import UserInfo from "./userInfo/UserInfo";
import TransactionUserList from "../Components/Transaction/TransactionUserList";

const UserPage = () => {

  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userData);
  useEffect(() => {
    dispatch(getUserInfoData());
  }, []);
  const loguot = () => {
    dispatch(userAuth(false))
    deleteToken()
  }

  return (
    <div className={classes.user}>

      <UserInfo user={user} loguot={loguot}/>
      <TransactionUserList></TransactionUserList>
    </div>
  );
};

export default UserPage;
