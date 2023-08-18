import { TrainingCard } from 'entities/TrainingCard/TrainingCard';
import './MyTrainings.css';
import React, { useEffect, useState } from 'react';

export const MyTrainings = () => {
	return (
		<div className="my-trainings">
			<div className="my-trainings__status">
				<button className="my-trainings__status-button_active">План</button>
				<button className="my-trainings__status-button">Пропущено</button>
				<button className="my-trainings__status-button">Выполнено</button>
			</div>
			<div className="my-trainings__conteiner">
				<TrainingCard title={`Бег`} date={`8 авг`} />
			</div>
		</div>
	);
};
