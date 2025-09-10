'use client';
import ListMovies from '@/components/common/ListMovies';
import SectionHomeBanner from '@/components/sections/home/SectionHomeBanner';
import { MovieType } from '@/type/MovieType';
import { memo } from 'react';

type PageHomeProps = {
	popularMovies?: MovieType[];
	topRatedMovies?: MovieType[];
	upcomingMovies?: MovieType[];
};

function PageHome({ popularMovies, topRatedMovies, upcomingMovies, ...props }: PageHomeProps) {
	return (
		<>
			<div className={`PageHome mainPage`}>
				{popularMovies && <SectionHomeBanner data={popularMovies[0]} />}

				<div className="mt-[-100px]">
					{!!topRatedMovies?.length && (
						<ListMovies zIndex={10} title="Top Rated Movies" data={topRatedMovies} ranking />
					)}
					{!!popularMovies?.length && <ListMovies zIndex={9} title="Popular Movies" data={popularMovies} />}
					{!!upcomingMovies?.length && (
						<ListMovies zIndex={8} title="Upcoming Movies" data={upcomingMovies} />
					)}
				</div>
			</div>
		</>
	);
}

export default memo(PageHome);
