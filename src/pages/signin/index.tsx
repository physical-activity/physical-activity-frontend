import './index.css';
import Header from '../../entities/Header/Header';
import { Form } from '../../entities/SIgnInForm/Form';
import { Footer } from '../../entities/Footer/Footer';

export const SignInPage = () => {
	return (
		<main className="signin">
			<Header />
			<Form />
			<Footer />
		</main>
	);
};
