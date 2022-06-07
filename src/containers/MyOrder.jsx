import React, {useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import flecha from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({toggleOrder, setToggleOrder}) => { //le ponemos como parametros los props que le pusimos en header a la etiqueta de myOrder y hacer funcionar la flecha

	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);

		return sum;
	}
	return (
		<aside className={styles['MyOrder-cont']}>
			<div className={styles['title-container']}>
				<Image src={flecha}  alt="arrow" onClick={() => setToggleOrder(!toggleOrder)} />
				<p className={styles['title-order']}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				<div className={styles['the-products']}>
				{state.cart.map( (product, index) => (<OrderItem indexValue={index} key={index} product={product} />))}
				</div>
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
			    <Link  href="/checkout">
					<button className={styles['primary-button']} onClick={() => setToggleOrder(!toggleOrder)} >Checkout</button>
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;