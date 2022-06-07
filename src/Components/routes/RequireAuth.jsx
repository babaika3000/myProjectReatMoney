import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
  const location = useLocation()
  const auth = useSelector((state) => state?.usersAuth?.isAuth )
  if(!auth){
    return <Navigate to="/registr" state={{from: location}}/>
  }
  return children;
};

export {RequireAuth};
