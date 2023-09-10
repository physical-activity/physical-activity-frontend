import styles from './BtnBlock.module.scss';

type Props = {
	text?: string;
	btnType?: string;
	handleClick?: () => void;
};

export const BtnBlock = ({ text, btnType, handleClick }: Props) => {
	return (
		<button className={styles.btn} onClick={handleClick}>
			{text}
		</button>
	);
};
