import './TextBlock.css';

const TextBlock = ({ text }: { text: string }) => {
	return (
		<div className="textBlock">
			<h2 className="textBlock__title">{text}</h2>
		</div>
	);
};

export default TextBlock;
