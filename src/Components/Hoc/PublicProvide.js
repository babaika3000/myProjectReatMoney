import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

const PublikProvide = ({children}) => {
  const location = useLocation()
  const auth = useSelector((state) => state?.usersAuth?.isAuth )
  console.log('@@auth@@', auth);
  if(auth){
    return <Navigate to="/userPage" state={{from: location}}/>
  }
  return children;
};

export {PublikProvide};
