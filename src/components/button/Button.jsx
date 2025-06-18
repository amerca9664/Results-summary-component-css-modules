import styles from './button.module.css';

const Button = ({ children }) => {
	const buttonCla = styles['button'];
	return <button className={buttonCla}>{children}</button>;
};

export default Button;
