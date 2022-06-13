import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/RecoveryPassword.module.scss';

const PasswordRecovery = () => {
	return (
        <>
        <Head>
            <title>RecoveryPassword</title>
        </Head>
		<div className={styles.PasswordRecovery}>
			<div className={styles['PasswordRecovery-container']}>
				<img role="presentation" src={logo.src} alt="logo" className={styles['logo-recovery']} />
				<h1 className={styles.title}>Password recovery</h1>
				<p className={styles.subtitle}>Inform the email address used to create your account</p>
				<form action="/">
					<label htmlFor="email">Email address</label>
					<input type="text" name="email" className={styles['input-email']} />
                    <Link href="/sendEmail">
					<button type="button" className={styles['primary-button']}>Submit</button>
                    </Link>
				</form>
			</div>
		</div>
        </>
	);
};

export default PasswordRecovery;