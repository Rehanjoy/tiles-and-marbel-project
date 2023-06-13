import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Header } from './Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { WEBSITE_CONFIG } from '../utils/config';

const Layout = ({ children }) => {
	// useEffect(() => {
	// 	console.log('RUNNED...');
	// 	toast.error('Hello World', 'waring');
	// }, []);
	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{WEBSITE_CONFIG?.WEBSITE_NAME}</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
