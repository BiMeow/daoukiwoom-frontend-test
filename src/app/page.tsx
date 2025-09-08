import PageHome from '@/components/router/PageHome';
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

	return <PageHome />;
}
