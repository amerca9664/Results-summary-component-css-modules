import { v4 } from 'uuid';
import style from './summary.module.css';
const evalCicle = data => {
	return (
		<div
			key={v4()}
			className={`${style.divCont}  ${style[`divCont--${data.category}`]}`}
		>
			<div className={`${style.iconDiv}`}>
				<img className={style.icon} src={data.icon}></img>
				<label className={`${style.label}  ${style[`label${data.category}`]}`}>
					{data.category}
				</label>
			</div>
			<div>
				<label className={`${style.label}  ${style[`label--num`]}`}>
					{data.score}
				</label>
				<label className={`${style.label}  ${style[`label--rest`]}`}>
					{' '}
					/ 100
				</label>
			</div>
		</div>
	);
};

const Summary = ({ data }) => {
	return (
		<div className={style.contenedor}>
			<h2 className={style.title}>Summary</h2>
			{data.map(evalCicle)}

			<button className={style.button}>Continue</button>
		</div>
	);
};

export default Summary;
