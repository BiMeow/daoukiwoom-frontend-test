'use client';

import Preloader from '@/components/common/Preloader';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

export default function DefaultLayout({ children, locale }: { children?: React.ReactNode; locale?: any }) {
	return (
		<>
			<Preloader />

			<div className="mainPage relative tl-p:w-screen tl-p:overflow-hidden">
				<Header />
				<main className="pageContent min-h-[calc(100vh-79px)] w-full">{children}</main>
				<Footer />
			</div>
		</>
	);
}
