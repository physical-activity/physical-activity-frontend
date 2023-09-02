import './loader.css';

export const Loader = () => {
	const x = 1;
	const style = { '--i': `${x}` } as React.CSSProperties;
	const style2 = { '--i': `${x + 1}` } as React.CSSProperties;
	const style3 = { '--i': `${x + 2}` } as React.CSSProperties;
	const style4 = { '--i': `${x + 3}` } as React.CSSProperties;
	const style5 = { '--i': `${x + 4}` } as React.CSSProperties;
	return (
		<div className="loader">
			<div className="loader__wrap">
				<span className="circle1" style={style}></span>
				<span className="circle2" style={style2}></span>
				<span className="circle3" style={style3}></span>
				<span className="circle4" style={style4}></span>
				<span className="circle5" style={style5}></span>
			</div>
			<p className="loader__text">Загрузка</p>
		</div>
	);
};
