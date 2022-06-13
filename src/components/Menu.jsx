import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = ({toggle, setToggle}) => {
    return (
    <div className={styles['desktop-menu']}>
        <ul>
            <li role="menuitem" onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)}>
                <Link href="/orders" >My orders</Link>
            </li>
            <li role="menuitem" onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)}>
                <Link href="/myAccount">My account </Link>
            </li>
            <li role="menuitem" onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)} >
                <Link href="/Login">Sign out</Link>
            </li>
        </ul>
    </div>

    );
};

export default Menu;