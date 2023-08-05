import './index.css';
import RegisterHeader from '../../entities/RegisterHeader/RegisterHeader';
import { RegisterForm } from '../../entities/RegisterForm/RegisterForm';
import { RegisterFooter } from '../../entities/RegisterFooter/RegisterFooter';

export const RegisterPage = () => {
	return (
		<main className="register">
			<RegisterHeader name={'Регистрация'} />
			<RegisterForm />
			<RegisterFooter footerText={'Войти в аккаунт'} footerLink={'signin'} />
		</main>
	);
};
