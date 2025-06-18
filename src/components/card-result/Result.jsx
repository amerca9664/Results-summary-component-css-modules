import styles from './result.module.css';

const Result = ({ data }) => {
	const { calification, messag } = calcs(data);
	const { content, title, circleDiv, resNum, spanFeli, parText } = styles;

	return (
		<div className={content}>
			<h2 className={title}>Your result</h2>
			<div className={circleDiv}>
				<span className={resNum}>{calification}</span>
				<span> / 100</span>
			</div>
			<span className={spanFeli}>{messag}</span>
			<p className={parText}>
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
