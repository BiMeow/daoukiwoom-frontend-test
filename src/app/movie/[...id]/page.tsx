import PageMovie from '@/components/router/PageMovie';
import fetchClient from '@/lib/fetch/fetchClient';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata = async () => {
	let title: any = 'Daoukiwoom Frontend Test | Home';
	let desc: any = 'BiMeow is me!!!';

	return {
		title: title,
		description: desc,
	};
};

export default async function Home() {
	noStore();

	return <PageMovie />;
}
