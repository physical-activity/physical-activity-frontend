import Header from '../../entities/Header/Header';
import './index.css';

export const RegisterErrorPage = () => {
	return (
		<main className="register-error">
			<Header headerTitleText={'Регистрация'} />
			<section className="register-error__block">
				<img
					src={require('./errorImg.svg').default}
					className="register-error__img"
					alt="required"
				/>
				<h1 className="register-error__title">Что-то пошло не так</h1>
				<p className="register-error__message">
					Аккаунт не удалось зарегистрировать. Попробуйте снова или напишите нам
					в поддержку help@fiz.ru
				</p>
			</section>
			<div className="register-error__button-container">
				<button className="register-error__button">Понятно</button>
			</div>
		</main>
	);
};
