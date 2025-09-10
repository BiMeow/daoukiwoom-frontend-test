import PageMovie from '@/components/router/PageMovie';
import { MovieDetailType } from '@/type/MovieType';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata = async () => {
	let title: any = 'Daoukiwoom Frontend Test | Home';
	let desc: any = 'BiMeow is me!!!';

	return {
		title: title,
		description: desc,
	};
};

export default async function Home({ params }: any) {
	noStore();

	const res = await fetch(`https://api.themoviedb.org/3/movie/755898`, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		},
		next: { revalidate: 3000 }, // Enable ISR (revalidate every 3000s)
	});
	const movieDetail: MovieDetailType = await res.json();

	console.log('BiMeow log movieDetail', params?.id[0], movieDetail);

	return <PageMovie movieDetail={movieDetail} />;
}
