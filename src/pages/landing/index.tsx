import './index.css';
import qrCode from './images/qrCode.svg';
import barGreen from './images/barGreen.svg';
import barWhite from './images/barWhite.svg';
import runner from './images/runner.svg';
import email from './images/email.svg';
import telegram from './images/telegram.svg';
import vk from './images/vk.svg';

export const Landing = () => {
	return (
		<div className="landing">
			<header className="landing__header">
				<div className="landing__header-outer-container">
					<div className="landing__header-inner-container">
						<h1 className="landing__header-logo">EasyFit</h1>
						<ul className="landing__header-links">
							<li className="landing__header-link">
								<a href="" className="landing__header-url">
									Возможности
								</a>
							</li>
							<li className="landing__header-link">
								<a href="" className="landing__header-url">
									Тренировки
								</a>
							</li>
							<li className="landing__header-link">
								<a href="" className="landing__header-url">
									Присоединиться
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<main className="landing__main">
				<section className="landing__cover">
					{/* <h1 className="landing__cover-heading">EasyFit</h1> */}
					<button className="landing__cover-button">Начать тренировки</button>
				</section>
				<section className="landing__opportunities">
					<div className="landing__text-block">
						<h2 className="landing__heading">Новые возможности</h2>
						<ul className="landing__list">
							<li className="landing__list-item">
								Тренируйся вместе с друзьями
							</li>
							<li className="landing__list-item">Следи за прогрессом</li>
							<li className="landing__list-item">Заводи новые знакомства</li>
							<li className="landing__list-item">Участвуй в челленджах</li>
						</ul>
					</div>
					<div className="landing__opportunities-img"></div>
				</section>
				<section className="landing__trainings">
					<div className="landing__text-block">
						<h2 className="landing__heading">Тренировки</h2>
					</div>
					<div className="landing__img-block landing__img-block_trainings">
						<div className="landing__training-img landing__training-img_run">
							<h3 className="landing__training-img-title">Бег</h3>
						</div>
						<div className="landing__training-img landing__training-img_walk">
							<h3 className="landing__training-img-title">Ходьба</h3>
						</div>
						<div className="landing__training-img landing__training-img_bike">
							<h3 className="landing__training-img-title">Велопрогулка</h3>
						</div>
					</div>
				</section>
				<section className="landing__join">
					<div className="landing__text-block">
						<h2 className="landing__heading">Присоединяйся к нам</h2>
						<ul className="landing__list">
							<li className="landing__list-item">Сканируй QR-код</li>
							<li className="landing__list-item">Регистрируйся в сервисе</li>
							<li className="landing__list-item">Приступай к тренировкам</li>
						</ul>
					</div>
					<div className="landing__img-block landing__img-block_join">
						<img src={qrCode} className="landing__qr-code" alt="QR-code" />
						<img
							src={barGreen}
							className="landing__bar landing__bar_green"
							alt="Breen bar"
						/>
					</div>
				</section>
				<section className="landing__share">
					<div className="landing__text-block">
						<h2 className="landing__heading landing__heading_share">
							Делись ссылкой с друзьями и тренируйтесь вместе!
						</h2>
					</div>
					<button className="landing__share-button">Скопировать ссылку</button>
					<img
						src={barWhite}
						className="landing__bar landing__bar_white"
						alt="White bar"
					/>
				</section>
			</main>
			<footer className="landing__footer">
				<div className="landing__footer-container">
					<h3 className="landing__footer-logo">EasyFit</h3>
					<ul className="landing__footer-links">
						<li className="landing__footer-link">
							<a href="" className="landing__footer-url" target="_blank">
								<img src={email} className="landing__footer-icon" alt=""></img>
							</a>
						</li>
						<li className="landing__footer-link">
							<a href="" className="landing__footer-url" target="_blank">
								<img
									src={telegram}
									className="landing__footer-icon"
									alt=""
								></img>
							</a>
						</li>
						<li className="landing__footer-link">
							<a href="" className="landing__footer-url" target="_blank">
								<img src={vk} className="landing__footer-icon" alt=""></img>
							</a>
						</li>
					</ul>
				</div>
				<div className="landing__footer-container">
					<p className="landing__footer-copyright">©2023 — EasyFit</p>
					<div className="landing__footer-paragraphs">
						<p className="landing__footer-paragraph">
							Политика конфиденциальности
						</p>
						<p className="landing__footer-paragraph">Условия использования</p>
					</div>
				</div>
			</footer>
		</div>
	);
};
