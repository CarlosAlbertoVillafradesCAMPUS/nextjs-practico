import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';
import Head from 'next/head';
import Link from 'next/link';

const newPassword = () => {
	return (
        <>
        <Head>
            <title>NewPassword</title>
        </Head>
		<div className={styles.NewPassword}>
			<div className={styles['NewPassword-container']}>
				<img role="presentation" src={logo.src} alt="logo" className={styles['logo-newPassword']} />
				<h1 className={styles.title}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new password for you account</p>
				<form action="/">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" placeholder="*********" className={styles['input-password']} />
					<label htmlFor="new-password">Password</label>
					<input type="password" name="new-password" placeholder="*********" className={styles['input-password']} />
                    <Link href="/Login">
					<button type="button" className={styles['primary-button']}>Confirm</button>
                    </Link>
				</form>
			</div>
		</div>
        </>
	);
};

export default newPassword;