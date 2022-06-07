import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppinCartItem = () => {
    return (
        <div className={styles.ShoppingCartItem}>
        <figure>
            <Image src={logo} alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
    </div>

    );
};

export default ShoppinCartItem;