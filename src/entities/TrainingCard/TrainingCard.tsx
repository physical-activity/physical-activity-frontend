import './TrainingCard.css';

type Props = {
	title: string;
	date: string;
};

export const TrainingCard = ({ title }: Props) => {
	return (
		<div className="training-card">
			<div className="training-card__conteiner">
				<p className="training-card__title">{title}</p>
				<div className="training-card__pic">ff</div>
			</div>
			<div className="training-card__conteiner">
				<div className="training-card__info">
					<div className="training-card__pic">ff</div>
					<p className="training-card__text">{title}</p>
				</div>
				<div className="training-card__info">
					<div className="training-card__pic">ff</div>
					<p className="training-card__text">{title}</p>
				</div>
				<div className="training-card__info">
					<div className="training-card__pic">ff</div>
					<p className="training-card__text">{title}</p>
				</div>
			</div>
			<div className="training-card__conteiner">
				<button className="training-card__button" />
				<button className="training-card__button" />
				<button className="training-card__button" />
			</div>
		</div>
	);
};
