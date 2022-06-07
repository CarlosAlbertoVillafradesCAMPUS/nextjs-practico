import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ( props ) => {
  const { product, indexValue } = props;
  const {removeFromCart} = useContext(AppContext);
  const handleRemove = index => {
    removeFromCart(index);
  };
    return (
        <div className={styles['order-item']}>
            <figure>
            {product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width={90} height={90} />}
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image src={close} alt="close" onClick={() => handleRemove(indexValue)} className={styles.close} />
          </div>

    );
};

export default OrderItem;