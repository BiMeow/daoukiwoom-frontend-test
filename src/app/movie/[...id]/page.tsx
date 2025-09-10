import PageMovie from '@/components/router/PageMovie';
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

	const resDetail = await fetch(`https://api.themoviedb.org/3/movie/${params?.id[0]}`, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		},
		next: { revalidate: 3000 }, // Enable ISR (revalidate every 3000s)
	});
	const movieDetail = await resDetail.json();

	const resRelated = await fetch(`https://api.themoviedb.org/3/movie/${params?.id[0]}/recommendations`, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		},
		next: { revalidate: 3000 }, // Enable ISR (revalidate every 3000s)
	});
	const relatedMovies = await resRelated.json();

	return <PageMovie movieDetail={movieDetail} relatedMovies={relatedMovies.results} />;
}
