import './TrainingDuration.css';
import duration from './duration.svg';
export const TrainingDuration = ({ value }: { value: string }) => {
	return (
		<div className="trainingduration__conteiner">
			<img src={duration} className="trainingduration__conteiner-img" />
			<p className="trainingduration__text-text">Длительность</p>
			<p className="trainingduration__text">{value ? value : '00:00'}</p>
		</div>
	);
};
