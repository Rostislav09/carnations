import React, { ReactElement, FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ onlyAuth = null, onlyNonAuth = null, children }) => { 
  const { isAuth } = useSelector(store => store.user)

  if (onlyAuth && !isAuth) {
    return <Navigate to={{ pathname: '/' }} />
  }

  if (onlyNonAuth && isAuth) {
    return <Navigate to="/admin/car-max/upload" />
  }

  return children
}

export default ProtectedRoute