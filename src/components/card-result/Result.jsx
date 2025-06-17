import styles from './result.module.css';

const Result = ({ data }) => {
	const prom = calcs(data);
	return (
		<div className={`${styles.content}`}>
			<h2 className={`${styles.title}`}>Your result</h2>
			<div className={`${styles.circleDiv}`}>
				<span className={`${styles.resNum}`}>{prom.calification}</span>
				<span> / 100</span>
			</div>
			<span className={`${styles.spanFeli}`}>{prom.messag}</span>
			<p className={`${styles.parText}`}>
				Your scored higher thsn 65% of the people who have taken these tests
			</p>
		</div>
	);
};

const calcs = data => {
	let inicialValue = 0;
	data.forEach(item => (inicialValue = inicialValue + item.score));
	const res = Math.floor(inicialValue / data.length);
	let message = '';
	if (res >= 90) {
		message = 'Very Great';
	} else if (res < 70) {
		message = 'not cool';
	} else {
		message = 'Great';
	}

	const objResult = {
		calification: res,
		messag: message
	};

	return objResult;
};

export default Result;
