'use client';
import ListMovies from '@/components/common/ListMovies';
import SectionHomeBanner from '@/components/sections/home/SectionHomeBanner';
import { MovieType } from '@/type/MovieType';
import { memo } from 'react';

type PageHomeProps = {
	popularMovies?: MovieType[];
	topRatedMovies?: MovieType[];
};

function PageHome({ popularMovies, topRatedMovies, ...props }: PageHomeProps) {
	return (
		<>
			<div className={`PageHome mainPage`}>
				{popularMovies && <SectionHomeBanner data={popularMovies[0]} />}

				<div className="mt-[-100px]">
					{popularMovies && <ListMovies zIndex={10} title="Popular Movies" data={popularMovies} />}
					{topRatedMovies && <ListMovies zIndex={9} title="Top Rated Movies" data={topRatedMovies} />}
				</div>
			</div>
		</>
	);
}

export default memo(PageHome);
