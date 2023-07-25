import Header from '../../entities/Header/Header';
import './index.css';

export const RegisterSuccessPage = () => {
	return (
		<main className="register-success">
			<Header headerTitleText={'Регистрация'} />
			<section className="register-success__block">
				<h1 className="register-success__title">Регистрация прошла успешно</h1>
				<img
					src={require('./successImg.svg').default}
					className="register-success__img"
					alt="required"
				/>
				<p className="register-success__message">
					Ваша учетная запись создана.
				</p>
			</section>
			<div className="register-success__button-container">
				<button className="register-success__button">Стартуем</button>
			</div>
		</main>
	);
};
