import Header from 'entities/Header/Header';
import { Input } from 'entities/Input/Input';
import { ResetPassworForm } from 'entities/Reset-password-form';
import { useFormValidation } from 'features/signin-form-validotor';
import { useState } from 'react';

export const ResetPasswordPage = () => {
	const [isRequsetMade, setIsRequsetMade] = useState(false);
	const [emailValue, setEmailValue] = useState('');

	return (
		<main className="main">
			{(() => {
				switch (isRequsetMade) {
					case false:
						return (
							<>
								<Header name={'Сброс пароля'} />
								<ResetPassworForm
									setIsRequsetMade={setIsRequsetMade}
									setEmailValue={setEmailValue}
									emailValue={emailValue}
								/>
							</>
						);
					case true:
						return (
							<>
								<Header name={'Сброс пароля'} />
								<div className="main__reset-block">
									<h3 className="reset-block__title">Подтверждение аккаунта</h3>
									<p className="reset-block__message">
										На почту {emailValue} отправлено письмо. Пройдите по ссылке
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
