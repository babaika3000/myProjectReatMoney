import React from 'react';
import classes from "../UserPage.module.css";

const UserInfo = ({user,loguot}) => {
  return (
    <div>
      <div className={classes.user_name}>
        {user?.name}
      </div>
      <div className={classes.user_email}>{user?.email}</div>
      <div className={classes.user_balance}>{user?.balance}</div>
      <button onClick={loguot}>logaut</button>
    </div>
  );
};

export default UserInfo;
