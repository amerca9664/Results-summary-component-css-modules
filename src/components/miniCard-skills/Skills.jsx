import styles from './skills.module.css';
const Skills = ({ dataSum }) => {
	const { category, score: dataScore, icon: iconRute } = dataSum;
	const { divCont, iconDiv, icon, label } = styles;

	return (
		<div className={`${divCont}  ${styles[`divCont${category}`]}`}>
			<div className={iconDiv}>
				<img className={icon} src={iconRute} alt={'icon ' + category}></img>
				<label className={label}>{category}</label>
			</div>
			<div>
				<label className={`${label}  ${styles[`labelNum`]}`}>{dataScore}</label>
				<label className={`${label}  ${styles[`labelRest`]}`}> / 100</label>
			</div>
		</div>
	);
};

export default Skills;
