import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/CreateAccount.module.scss';

const createAccount = () => {
	return (
        <>
        <Head>
            <title>CreateAccount</title>
        </Head>
		<div className={styles.CreateAccount}>
			<div className={styles['CreateAccount-container']}>
				<h1 className={styles.title}>My account</h1>
				<form action="/">
					<div className={styles['container-labels']}>
						<label htmlFor='name' >Name</label>
						<input type="text" name="name" placeholder="YardSale" className={styles['input-name']} />
						<label htmlFor="email" >Email</label>
						<input type="text" name="email" placeholder="YardSale@example.com" className={styles['input-email']} />
						<label htmlFor="password" >Password</label>
						<input type="password" name="password" placeholder="*********" className={styles['input-password']} />
					</div>
                    <Link href="/myAccount">
					<button type="button" className={styles['primary-button']}>Create</button>
                    </Link>
				</form>
			</div>
		</div>
        </>
	);
};

export default createAccount;