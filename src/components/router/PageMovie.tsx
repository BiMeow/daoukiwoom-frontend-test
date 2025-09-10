'use client';
import { IconLikeCircle, IconPlay, IconPlusCircle } from '@/components/common/Icon';
import ListMovies from '@/components/common/ListMovies';
import { getBaseAssetUrl } from '@/config/AppConfig';
import { MovieDetailType, MovieType } from '@/type/MovieType';
import Image from 'next/image';
import { memo, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'));

type PageMovieProps = {
	movieDetail?: MovieDetailType;
	relatedMovies?: MovieType[];
};

function PageMovie({ movieDetail, relatedMovies, ...props }: PageMovieProps) {
	const [play, setPlay] = useState<boolean>(false);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setPlay(true);
	// 	}, 3000); // 3 seconds

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<>
			<div className={`PageMovie mainPage`}>
				<div className={`banner relative mb-[20px] h-screen`}>
					<ReactPlayer
						className="absolute z-0 !h-full !w-full"
						playing={play}
						muted={false}
						playsInline={true}
						url={'https://www.youtube.com/embed/-RnTwnY-Tfc?si=Xoju0uMzffxqoz98'}
						loop={true}
						controls
					/>
					{play ? (
						''
					) : (
						<>
							<div className="cover relative z-10 size-full">
								<Image
									src={getBaseAssetUrl(movieDetail?.backdrop_path ?? '')}
									alt="Netflix Banner"
									className={`size-full object-cover`}
									width={0}
									height={0}
									sizes="100vw"
								/>
							</div>

							<div className="content absolute bottom-[10%] left-[4%] z-30 space-y-[20px]">
								<h1 className="text-[5vw] font-bold tl-p:text-[50px] mb:text-[40px]">
									{movieDetail?.title}
								</h1>
								<div className="listBtn flex gap-[10px]">
									<div className="mainBtn flex items-center gap-[12px]" onClick={() => setPlay(true)}>
										<IconPlay className="text-[21px]" />
										<p>Play trailer</p>
									</div>
									<IconPlusCircle className="cursor-pointer text-[40px] text-[#fff4] duration-300 hover:text-white" />
									<IconLikeCircle className="cursor-pointer text-[40px] text-[#fff4] duration-300 hover:text-white" />
								</div>
							</div>

							<div className="backdrop absolute bottom-0 left-0 z-20 h-[20%] w-full bg-gradient-to-t from-black to-transparent"></div>
						</>
					)}
				</div>

				<div className="detail cusContainer secSpacing">
					<div className="mx-[-20px] flex flex-wrap gap-y-[20px] text-[1vw] tl-p:text-[16px]">
						<div className="c1 w-1/2 space-y-[20px] px-[20px] mb:w-full">
							<div className="grid grid-cols-2 gap-[10px] ">
								<p>
									<span className="mr-[10px] text-[#fff4]">Popularity:</span>
									{movieDetail?.popularity}
								</p>
								<p>
									<span className="mr-[10px] text-[#fff4]">Tag:</span>
									{movieDetail?.tagline}
								</p>
								<p>
									<span className="mr-[10px] text-[#fff4]">Vote Average:</span>
									{movieDetail?.vote_average}
								</p>
								<p>
									<span className="mr-[10px] text-[#fff4]">Vote Count:</span>
									{movieDetail?.vote_count}
								</p>
							</div>

							<p>{movieDetail?.overview}</p>
						</div>
						<div className="c2 w-1/2 space-y-[20px] px-[20px] mb:w-full">
							<p>
								<span className="mr-[10px] text-[#fff4]">Production Countries:</span>
								{movieDetail?.production_countries[0]?.name}
							</p>
							<div className="flex gap-[10px]">
								<p className="text-[#fff4]">Genres:</p>
								{movieDetail?.genres?.map((genre, index) => (
									<p key={index}>
										{genre?.name}{' '}
										{index < movieDetail?.genres?.length - 1 && <span className="mx-[5px]">•</span>}
									</p>
								))}
							</div>
							<p>
								<span className="mr-[10px] text-[#fff4]">Release Date:</span>
								{movieDetail?.release_date}
							</p>
							<p>
								<span className="mr-[10px] text-[#fff4]">Language:</span>
								{movieDetail?.spoken_languages[0]?.name}
							</p>
						</div>
					</div>
				</div>

				<div className="listRelated">
					{!!relatedMovies?.length && <ListMovies zIndex={10} title="Related Movies" data={relatedMovies} />}
				</div>
			</div>
		</>
	);
}

export default memo(PageMovie);
