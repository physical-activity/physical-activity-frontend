import './index.css';
import Header from 'entities/Header/Header';
import { SignInForm } from 'entities/SignInForm';
import { Footer } from 'entities/Footer';
import { useState } from 'react';

export const SignInPage = () => {
	return (
		<main className="main">
			<Header name={'вход'} />
			<SignInForm />
			<Footer footerQuestion={'Еще нет аккаунта?'} footerAnswer={'Создать'} />
		</main>
	);
};
