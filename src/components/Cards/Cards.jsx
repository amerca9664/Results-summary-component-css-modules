import Result from '../card-result/Result';
import Summary from '../card-summary/Summary';
import { DATA } from './data';

const Cards = () => {
	return (
		<div className='contenedor'>
			<Result data={DATA}></Result>
			<Summary data={DATA}></Summary>
		</div>
	);
};

export default Cards;
