import Header from 'entities/Header/Header';
import './index.css';
import { ConfirmPasswordForm } from 'entities/Confirm-password-form';
export const ConfirmNewPasswordPage = () => {
	return (
		<main className="main">
			<Header name={'Восстановление пароля'} />
			<ConfirmPasswordForm />
		</main>
	);
};
