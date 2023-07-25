import './index.css';
import Header from 'entities/Header/Header';
import { SignInForm } from 'entities/SignInForm';
import { Footer } from 'entities/Footer';
import { useState } from 'react';

export const SignInPage = () => {
	const [isResetPassword, setIsResetPassword] = useState(false);
	const [userEmail, setUserEmail] = useState('');
	return (
		<main className="main">
			{(() => {
				switch (isResetPassword) {
					case true: {
						return (
							<>
								<Header name={'вход'} />
								<SignInForm
									setIsResetPassword={setIsResetPassword}
									setUserEmail={setUserEmail}
								/>
								<Footer
									footerQuestion={'Еще нет аккаунта?'}
									footerAnswer={'Создать'}
								/>
							</>
						);
					}
					case false:
						return (
							<>
								<Header name={'Сброс пароля'} />
								<div className="main__reset-block">
									<h3 className="reset-block__title">Подтверждение аккаунта</h3>
									<p className="reset-block__message">
										На почту {userEmail} отправлено письмо. Пройдите по ссылке
										из письма для входа в приложение.
									</p>
								</div>
							</>
						);
				}
			})()}
		</main>
	);
};
