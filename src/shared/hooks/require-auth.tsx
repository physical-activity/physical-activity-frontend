import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from './redux';

const RequireAuth = () => {
	const token = useAppSelector((state) => state.user.auth_token);

	return !token ? <Navigate to="/signin" /> : <Outlet />;
};

export default RequireAuth;
