import React from 'react';
import Head from 'next/head';
import styles from '@styles/MyAccount.module.scss';
import Link from 'next/link';

const myAccount = () => {
	return (
        <>
        <Head>
        <title>MyAccount</title>
        </Head>
		<div className={styles.MyAccount}>
			<div className={styles['MyAccount-container']}>
				<h1 className={styles.title}>My account</h1>
				<form action="/" className={styles.form}>
					<div className={styles['cont-labels']}>
						<label htmlFor="name" >Name</label>
						<p>Carlos Villafrades</p>
						<label htmlFor="email" >Email</label>
						<p>Cavillafrades@gmail.com</p>
						<label htmlFor="password" >Password</label>
						<p>*********</p>
					</div>
                    <Link href="/createAccount" >
					    <button type="button" className={styles['secondary-button']}>Edit</button>
                    </Link>
				</form>
			</div>
		</div>
        </>
	);
};

export default myAccount;