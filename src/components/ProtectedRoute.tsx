import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type Props = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: Props) {
  const { currentUser } = useAuth();

  const location = useLocation();

  if (currentUser === null) {
    const from = location.pathname;
    return <Navigate to="/signin" state={{ from }} replace />;
  }
  return children;
}

export default ProtectedRoute;
