import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
// import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	// const [width] = WindowSize();
	
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					<span style={{ color: `#00a098` }}>
						{' '}
						Hi, I am Shubham Tammewar
						Software Engineer at Globallogic India Pvt. Ltd., Chennai.
					</span>
					I enjoy creating things that are live on the internet. Enthusiastic Web Developer Who believes 
					in developing MERN stack apps that are performance driven. <br />
					<br /> Fast Forwarding to today, I built a number of web
					applications and 4 major projects. Learned a great deal
					about teamwork, leadership, and communication. here I am with
					3+ years of Experienced in Web Developement
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
