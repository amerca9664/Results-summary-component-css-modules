import { v4 } from 'uuid';
import Skills from '../miniCard-skills/Skills';
import styles from './summary.module.css';
import Button from '../button/Button';

const evalCicle = itemData => <Skills key={v4()} dataSum={itemData}></Skills>;

const Summary = ({ data }) => {
	const { contenedor, title } = styles;
	return (
		<div className={contenedor}>
			<h2 className={title}>Summary</h2>
			{data.map(evalCicle)}
			<Button>Continue</Button>
		</div>
	);
};

export default Summary;
