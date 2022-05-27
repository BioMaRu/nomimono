import styles from './Footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
	return (
		<div className={styles['container']}>
			<h1>Welcome to Footer!</h1>
		</div>
	);
}

export default Footer;
