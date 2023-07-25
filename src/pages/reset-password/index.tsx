import Header from 'entities/Header/Header';
import './index.css';
import { ResetPasswordForm } from 'entities/ResetPasswordForm';
export const ResetPasswordPage = () => {
	return (
		<main className="main">
			<Header name={'Сброс пароля'} />
			<ResetPasswordForm />
		</main>
	);
};
