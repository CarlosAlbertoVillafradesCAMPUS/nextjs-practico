import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/Login.module.scss';


const Login = () => {

	const form = useRef(null); //el useRef se utiliza para traer o coger informacion que tengamos en unos inputs
	const handleSubmit = ( event ) =>{
		event.preventDefault();
		const formData = new FormData(form.current); //aqui lo que estamos hciendo es utilizando formData y con el .current estamos tomando el valor de email y password
	    const data = {  //lo que esto vaa ser es crearme un nuevo formData con los valore que coloquemos en emial y password
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};

	return (
        <>
        <Head>
            <title>Login</title>
        </Head>
		<div className={styles.Login}>
			<div className={styles['Login-container']}>
				<img role="presentation" src={logo.src} alt="logo" className={styles['logo-login']} />
				<form action="/" className={styles.form} ref={form}>
					<label htmlFor="email">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles['input input-email']} />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" placeholder="*********" className={styles['input input-password']} />
					<button className={styles['primary-button']} onClick={handleSubmit} >Log in</button>
					<Link href="/recoveryPassword">Forgot my password</Link>
				</form>
				<button className={styles['secondary-button']}>Sign up</button>
			</div>
		</div>
        </>
	);
};

export default Login;