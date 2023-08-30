import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from './redux';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const token = useAppSelector((state) => state.user.auth_token);

	return token ? children : <Navigate to="/signin" />;
};

export default RequireAuth;
