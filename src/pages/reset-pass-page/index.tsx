import { useState } from 'react';
import Header from 'entities/Header/Header';
import { ResetPassworForm } from 'entities/Reset-password-form';

export const ResetPasswordPage = () => {
	const [isRequsetMade, setIsRequsetMade] = useState(false);
	const [emailValue, setEmailValue] = useState('');

	return (
		<main className="main">
			<Header name={'Сброс пароля'} />
			{!isRequsetMade ? (
				<>
					<ResetPassworForm
						setIsRequsetMade={setIsRequsetMade}
						setEmailValue={setEmailValue}
						emailValue={emailValue}
					/>
				</>
			) : (
				<>
					<div className="main__reset-block">
						<h3 className="reset-block__title">Подтверждение аккаунта</h3>
						<p className="reset-block__message">
							На почту {emailValue} отправлено письмо. Пройдите по ссылке
							из письма для входа в приложение.
						</p>
					</div>
				</>
			)}
		</main>
	);
};
