import './TrainingDuration.css';

export const TrainingDuration = ({ value }: { value: string }) => {
	return (
		<div className="trainingduration__conteiner">
			<p className="trainingduration__text">Продолжительность</p>
			<p className="trainingduration__text">{value}</p>
		</div>
	);
};
