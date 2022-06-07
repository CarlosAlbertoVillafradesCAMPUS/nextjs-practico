import React, { useContext } from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const {AddToCart, removeFromCart, state} = useContext(AppContext);
	const itsProductAdded = () => //aqui creameos una funcion que nos compare los productos haber si son los mismo o no, con el ID
    state.cart.some((item) => item.id === product.id) ? true : false;

	const handleClick = (item) => {  //hnadle se utiliza para una funcion despues d eun evento y siempre va con el nombre de handle + el evento
		itsProductAdded() ? removeFromCart(item) : AddToCart(item); 
	};

	return (
		<div className={styles.ProductItem}>
			<Image  loader={() => product.images[0]} src={product.images[0]}  alt={product.title} className={styles['image-product']} width="100%" height="100%" layout='responsive' />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<div className='figure' role="button" tabIndex={0} onClick={() => handleClick(product)} onKeyDown={() => handleClick(product)}>
					{itsProductAdded() ? (<Image src={addedCart} alt='addedcart' className={styles['added-cart']} width={35} height={35}/>) : (<Image src={addToCart} alt='addcart' className={styles['add-cart']} />)}
				</div>
			</div>
		</div>
	);
};

export default ProductItem;