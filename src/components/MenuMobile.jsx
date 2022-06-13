import React from 'react';
import close from '@icons/icon_close.png';
import Link from 'next/link';
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = ({toggleMenuM, setToggleMenuM}) => {
    return (
     <div className={styles['movil-menu']}>
         <img role="presentation" className={styles.close} src={close.src} alt="close" onClick={() => setToggleMenuM(!toggleMenuM)} onKeyDown={() => setToggleMenuM(!toggleMenuM)} />
        <ul className={styles.principal}>
            <li>
                <Link href="/">CATEGORIES</Link>
            </li>
            <li>
                <Link href="/">All</Link>
            </li>
            <li>
                <Link href="/">Clothes</Link>
            </li>
            <li>
                <Link href="/">Electronics</Link>
            </li>
            <li>
                <Link href="/">Furnitures</Link>
            </li>
            <li>
                <Link href="/">Toys</Link>
            </li>
            <li>
                <Link href="/">Others</Link>
            </li>
        </ul>
        <ul className={styles.setting}>
            <li role="menuitem" onClick={() => setToggleMenuM(!toggleMenuM)} onKeyDown={() => setToggleMenuM(!toggleMenuM)}>
                <Link href="/orders">My orders</Link>
            </li>
            <li role="menuitem" onClick={() => setToggleMenuM(!toggleMenuM)} onKeyDown={() => setToggleMenuM(!toggleMenuM)}>
                <Link href="/myAccount">My account</Link>
            </li>
        </ul>
        <ul className={styles.footer}>
            <li className={styles.one}>
                <Link href="/" >Cavillafrades@gmail.com</Link>
            </li>
            <li className={styles.two} role="menuitem" onClick={() => setToggleMenuM(!toggleMenuM)} onKeyDown={() => setToggleMenuM(!toggleMenuM)}>
                <Link href="/Login" >Sign out</Link>
            </li>
        </ul>
     </div>

    );
};

export default MenuMobile;