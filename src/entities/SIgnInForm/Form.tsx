import { Input } from './components/Input';
import './Form.css';
export const Form = () => {
	return (
		<form className="signin__form">
			<div className='signin__input-container'>
				<Input />
				<Input />
				<button className="signin__recover-pass">Восстановить пароль</button>
			</div>
      <div className='signin__button-continer'>
			  <button className="signin__button">Войти</button>
      </div>
		</form>
	);
};
