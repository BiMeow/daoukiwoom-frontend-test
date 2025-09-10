import PageHome from '@/components/router/PageHome';
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

	const popularMovies: any = await fetchClient({ path: 'https://api.themoviedb.org/3/movie/popular' });
	const topRatedMovies: any = await fetchClient({ path: 'https://api.themoviedb.org/3/movie/top_rated' });
	const upcomingMovies: any = await fetchClient({ path: 'https://api.themoviedb.org/3/movie/upcoming' });

	return (
		<PageHome
			popularMovies={popularMovies.results}
			topRatedMovies={topRatedMovies.results}
			upcomingMovies={upcomingMovies.results}
		/>
	);
}
