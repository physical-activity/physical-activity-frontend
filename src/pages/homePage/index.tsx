import { useNavigate } from 'react-router-dom';
import './index.css';

import mailIcon from './icons/mail.svg';
import telegramIcon from './icons/telegram.svg';
import instagramIcon from './icons/instagram.svg';
import arrowIcon from './icons/arrow.svg';
import { MenuBurger } from 'features/menuBurger';
import { useState } from 'react';

export const HomePage = () => {
	const navigate = useNavigate();

	const items = [
		{ value: 'Войти', path: '/signin' },
		{
			value: 'Зарегистрироваться',
			path: '/',
		} /*TODO: путь для регистрации прописать */,
	];

	const [burgerMenuActive, setBurgerMenuActive] = useState<boolean>(false);

	return (
		<div className="wrapper page__text">
			<header className="headerHome">
				<h1 className="page__text headerHome__title">EasyFit</h1>
				<div
					className="burger-btn"
					onClick={() => {
						setBurgerMenuActive(!burgerMenuActive);
					}}
				>
					<span />
				</div>
			</header>
			<main className="home">
				<section className="hero">
					<h2 className="page__text hero__title">
						Найди партнёра по тренировке
					</h2>
					<div className="hero__img-container">
						<img
							className="hero__img"
							src="/images/background.png"
							alt="Фоновое изображение"
						/>
						<span className="page__text hero__imgText">Easyfit</span>
						<span className="page__text hero__imgText">Easyfit</span>
						<span className="page__text hero__imgText">Easyfit</span>
						<span className="page__text hero__imgText">Easyfit</span>
						<span className="page__text hero__text">для тебя и для всех</span>
					</div>
				</section>
				<section className="todo">
					<nav className="todo__nav">
						<ul className="todo__list">
							<li
								className="todo__nav-item"
								onClick={() => {
									navigate('/');
								}}
							>
								<img src={arrowIcon} alt="Стрелка" />
								Тренируйся с друзьями
							</li>
							<li
								className="todo__nav-item"
								onClick={() => {
									navigate('/');
								}}
							>
								<img src={arrowIcon} alt="Стрелка" />
								Смотри статистику
							</li>
							<li
								className="todo__nav-item"
								onClick={() => {
									navigate('/');
								}}
							>
								<img src={arrowIcon} alt="Стрелка" />
								Заводи новые знакомства
							</li>
							<li
								className="todo__nav-item"
								onClick={() => {
									navigate('/');
								}}
							>
								<img src={arrowIcon} alt="Стрелка" />
								Участвуй в челленджах
							</li>
						</ul>
					</nav>
				</section>
				<section className="workout">
					<h2 className="page__text workout__title">Виды тренировок</h2>
					<div className="workout__container">
						<div className="workout__img-container">
							<img src="/images/workout1.png" alt="Ходьба"></img>
							<p className="page__text workout__imgText">Ходьба</p>
						</div>
						<div className="workout__img-container">
							<img src="/images/workout3.png" alt="Бег"></img>
							<p className="page__text workout__imgText">Бег</p>
						</div>
						<div className="workout__img-container">
							<img src="/images/workout2.png" alt="Велосипед"></img>
							<p className="page__text workout__imgText">Велосипед</p>
						</div>
					</div>
					<div className="workout__btn">
						<div
							className="btn btn-primary"
							onClick={() => {
								navigate('/');
							}}
						>
							Начать тренироваться
						</div>
					</div>
				</section>
			</main>
			<footer className="footerHome">
				<h2 className="page__text footerHome__title">Обратная связь</h2>
				<div className="footerHome__contacts">
					<a href="mailto:someone@example.com" className="footerHome__contact">
						<img src={mailIcon} alt="Почта" />
					</a>
					<a href="https://web.telegram.org/k/" className="footerHome__contact">
						<img src={telegramIcon} alt="Телеграм" />
					</a>
					<a href="instagram.com/" className="footerHome__contact">
						<img src={instagramIcon} alt="Инстаграм" />
					</a>
				</div>
			</footer>
			<MenuBurger
				active={burgerMenuActive}
				setActive={setBurgerMenuActive}
				items={items}
			/>
		</div>
	);
};
