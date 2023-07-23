import './index.css';
import Header from '../../entities/Header/Header';
import { Footer } from '../../entities/Footer/Footer';

export const RegisterPage = () => {
	return (
		<main className="register">
			<Header headerTitleText={'Регистрация'} />
			<Footer footerQuestion={'Уже есть аккаунт?'} footerAnswer={'Войти'} />
		</main>
	);
};
