import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Principal from '@templates/Principal';
import Login from '@template/Login';
import RecoveryPassword from '@template/RecoveryPassword';
import SendEmail from '@template/SendEmail';
import NewPassword from '@template/NewPassword';
import MyAccount from '@template/MyAccount';
import CreateAccount from '@template/CreateAccount';
import Checkout from '@template/Checkout';
import Orders from '@template/Orders';
import NotFound from '@template/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.scss';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState} >
		  <BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Principal />} />
					<Route path="/login" element={<Login />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="/send-email" element={<SendEmail />} />
					<Route path="/new-password" element={<NewPassword />} />
					<Route path="/account" element={<MyAccount />} />
					<Route path="/signup" element={<CreateAccount />} />
					<Route path="/Checkout" element={<Checkout />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		  </BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
