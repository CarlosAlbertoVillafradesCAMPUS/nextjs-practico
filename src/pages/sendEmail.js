import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
	return (
        <>
        <Head>
            <title>SendEmail</title>
        </Head>
		<div className={styles.SendEmail}>
			<div className={styles['form-container']}>
				<img role="presentation" src={logo.src} alt="logo" className={styles['logo-sendEmail']} />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles['email-image']}>
					<img role="presentation" src={email.src} alt="email" />
				</div>
                <Link href="/Login">
				<button className={styles['primary-button']}>Login</button>
                </Link>
				<p className={styles.resend}>
					<span>Didnt receive the email?</span>
					<Link href="/recoveryPassword">Resend</Link>
				</p>
			</div>
		</div>
        </>
	);
};

export default SendEmail;