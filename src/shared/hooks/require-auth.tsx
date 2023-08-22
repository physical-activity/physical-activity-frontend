import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';

const RequireAuth: FC<{ children: ReactElement }> = ({ children }) => {
	const location = useLocation();
	const token = localStorage.getItem('token');

	return !token ? (
		<Navigate to="/signin" state={{ from: location }} />
	) : (
		children
	);
};

export default RequireAuth;
