import Result from '../card-result/Result';
import Summary from '../card-summary/Summary';
import { DATA } from './data';
import styles from './cads.module.css';
const Cards = () => {
	const contCards = styles['contenedor'];
	return (
		<div className={contCards}>
			<Result data={DATA}></Result>
			<Summary data={DATA}></Summary>
		</div>
	);
};

export default Cards;
