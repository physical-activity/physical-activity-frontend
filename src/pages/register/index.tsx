import './index.css';
import Header from '../../entities/Header/Header';
import { RegisterForm } from '../../entities/RegisterForm/RegisterForm';
import { Footer } from '../../entities/Footer/Footer';

export const RegisterPage = () => {
	return (
		<main className="register">
			<Header headerTitleText={'Регистрация'} />
			<RegisterForm />
			<Footer footerText={'Войти в аккаунт'} footerLink={'signin'} />
		</main>
	);
};
