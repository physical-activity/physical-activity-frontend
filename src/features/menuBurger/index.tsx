import { useNavigate } from 'react-router-dom';
import './index.css';

import mailIcon from './icons/mail.svg';
import telegramIcon from './icons/telegram.svg';
import instagramIcon from './icons/instagram.svg';

type Props = {
	items: Data[];
	active: boolean;
	setActive: (active: boolean) => void;
};

type Data = {
	value: string;
	path: string;
};

export const MenuBurger = ({ items, active, setActive }: Props) => {
	const navigate = useNavigate();

	return (
		<div
			className={active ? 'burgerMenu active' : 'burgerMenu'}
			onClick={() => setActive(false)}
		>
			<div
				className="burgerMenu__content"
				onClick={(evt) => evt.stopPropagation()}
			>
				<ul className="burgerMenu__list">
					{items.map((item, index) => (
						<li
							className="burgermenu__list-item"
							key={`list_${index}`}
							onClick={() => navigate(`${item.path}`)}
						>
							{item.value}
						</li>
					))}
				</ul>
			</div>
			<footer className="footerHome" onClick={(evt) => evt.stopPropagation()}>
				<h2 className="page__text footerHome__title">Обратная связь</h2>
				<div className="footerHome__contacts">
					<a href="mailto:someone@example.com" className="footerHome__contact">
						<img src={mailIcon} alt="Почта" />
					</a>
					<a href="https://web.telegram.org/" className="footerHome__contact">
						<img src={telegramIcon} alt="Телеграм" />
					</a>
					<a href="instagram.com/" className="footerHome__contact">
						<img src={instagramIcon} alt="Инстаграм" />
					</a>
				</div>
			</footer>
		</div>
	);
};
