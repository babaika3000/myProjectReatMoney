import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

const PublicProvide = ({children}) => {
  const location = useLocation()
  const auth = useSelector((state) => state?.usersAuth?.isAuth )
  if(auth){
    return <Navigate to="/userPage" state={{from: location}}/>
  }
  return children;
};

export {PublicProvide};
