import React, { useState, useContext } from 'react';
import Menu from '@components/Menu.jsx';
import MenuMobile from './MenuMobile';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import Image from 'next/image';
import Link from 'next/link';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import flecha from '@icons/flechita.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {

	const {state} = useContext(AppContext);

	const [toggle, setToggle] = useState(false);
	const [toggleOrder, setToggleOrder] = useState(false);
	const [toggleMenuM, setToggleMenuM] = useState(false);
	
	return (
		<nav className={styles.nav}>
			<img src={iconMenu.src} alt="menu" className={styles.menu} onClick={() => setToggleMenuM(!toggleMenuM)} />
			<div className={styles['navbar-left']}>
				<Link href="/">
				<Image src= {logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<Link href="/">
						All
						</Link>
					</li>
					<li>
						<Link href="/">
						Clothes
						</Link>
					</li>
					<li>
						<Link href="/">
						Electronics
						</Link>
					</li>
					<li>
						<Link href="/">
						Fornitures
						</Link>
					</li>
					<li>
						<Link href="/">
						Toys
						</Link>
					</li>
					<li>
						<Link href="/">
						Others
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					{/* cuando la etiqueta es div el role que debe tener para que no salga el error debe ser button */}
					<div className={styles['email-arrow']} role="button" tabIndex={0} onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)} >
					<li className={styles['navbar-email']}>YardSale@example.com</li>
					<Image src={flecha} alt="arrow"  className={styles['arrow-menu']}  />
					</div>
					{/* cuando la etiqueta es li el role que debe tener para que no salga el error debe ser menuitem */}
					<li className={styles['navbar-shopping-cart']} role="menuitem" tabIndex={0} onClick={() => setToggleOrder(!toggleOrder)} onKeyDown={() => setToggleOrder(!toggleOrder)}>
						<Image src= {shoppingCart} alt="shopping cart" />
						{state.cart.length > 0  ?<div>{state.cart.length}</div> :null }
					</li>
				</ul>
			</div>
			{toggleMenuM && <MenuMobile toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM} />}
			{toggle && <Menu />}
			{toggleOrder && <MyOrder toggleOrder={toggleOrder} setToggleOrder={setToggleOrder} />} {/*aqui le estamos pasando estos propos para poderlos utilizar en la carpeta de myOrder y hacer funcionar la flecha de close*/ } 
		</nav>	
	);
};

export default Header;