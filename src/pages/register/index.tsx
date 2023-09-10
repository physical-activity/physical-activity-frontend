import './index.css';
// import RegisterHeader from '../../entities/RegisterHeader/RegisterHeader';
import { RegisterForm } from '../../entities/RegisterForm/RegisterForm';
import { RegisterFooter } from '../../entities/RegisterFooter/RegisterFooter';
import Header from 'entities/Header/Header';
export const RegisterPage = () => {
	return (
		<main className="register">
			<Header name={'Регистрация'} />
			<RegisterForm />
			{/* <RegisterFooter footerText={'Войти в аккаунт'} footerLink={'signin'} /> */}
		</main>
	);
};
