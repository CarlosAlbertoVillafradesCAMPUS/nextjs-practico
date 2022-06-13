import React from 'react';
import Head from 'next/head';
import styles from '@styles/Orders.module.scss';

const orders = () => {
	return (
        <>
        <Head>
            <title>MyOrders</title>
        </Head>
		<div className={styles.Orders}>
			<div className={styles['Orders-container']}>
				<h1 className={styles.title}>My orders</h1>
				<div className={styles['Orders-content']}>
				</div>
			</div>
		</div>
        </>
	);
};

export default orders;