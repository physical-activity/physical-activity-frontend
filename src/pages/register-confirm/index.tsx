import Header from '../../entities/Header/Header';
import './index.css';

export const RegisterConfirmPage = () => {
	return (
		<main className="register-confirm">
			<Header headerTitleText={'Регистрация'} />
			<section className="register-confirm__block">
				<h1 className="register-confirm__title">Подтверждение аккаунта</h1>
				<p className="register-confirm__message">
					На почту account@mail.ru отправлено письмо. Пройдите по ссылке
					из письма для входа в приложение.
				</p>
			</section>
		</main>
	);
};
