import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.

					Liked my work? Want to get in touch?
				</p>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
					<a
						href='tel:9850346259'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fas fa-phone-alt' />
					</a>
					<a
						href='mailto:shubhamtammewar96@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<i className='far fa-envelope'></i>
					</a>
					{/* <a
						href='/'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a> */}
					<a
						href='https://github.com/shubhamtammewar'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
					</a>

					<a
						href='https://www.linkedin.com/in/shubhamtammewar'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
					<p>Mobile Number:- 9850346259
                       Email:-shubhamtammewar96@gmail.com
					</p>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
				Designed and build by Shubham Tammewar, 2022 All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
