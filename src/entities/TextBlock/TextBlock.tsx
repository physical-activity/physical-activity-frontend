import styles from './TextBlock.module.scss';

const TextBlock = ({ text }: { text: string }) => {
	return (
		<div className={styles.container}>
			<div className={styles.textBlock}>
				<h2 className={styles.textBlock__title}>{text}</h2>
			</div>
		</div>
	);
};

export default TextBlock;
