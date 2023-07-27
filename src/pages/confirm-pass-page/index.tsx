import Header from 'entities/Header/Header';
import './index.css';
import { ResetPasswordForm } from 'entities/ResetPasswordForm';
export const ConfirmNewPasswordPage = () => {
	return (
		<main className="main">
			<Header name={'Новый пароль'} />
			<ResetPasswordForm />
		</main>
	);
};
