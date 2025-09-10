import CardMovie from '@/components/common/CardMovie';
import { IconMinimalArrow } from '@/components/common/Icon';
import { MovieType } from '@/type/MovieType';
import { memo, useCallback, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ListMoviesProps = {
	data: MovieType[];
	title?: string;
	className?: string;
	zIndex?: number;
	ranking?: boolean;
};

function ListMovies({
	data,
	title = 'Matched to You',
	className,
	zIndex = 1,
	ranking = false,
	...props
}: ListMoviesProps) {
	const sliderRef = useRef<any>(null);

	const [isBeginning, setIsBeginning] = useState<boolean>(true);
	const [isEnd, setIsEnd] = useState<boolean>(false);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<>
			<div className={`ListMovies secSpacing cusContainer relative ${className}`} style={{ zIndex: zIndex }}>
				<h2 className="mb-[15px] text-[20px] font-medium">{title}</h2>

				<div className="relative">
					<Swiper
						ref={sliderRef}
						slidesPerView={3}
						slidesPerGroup={3}
						spaceBetween={6}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination, Navigation]}
						className="listMoviesSwiper !overflow-visible"
						onSlideChange={(swiper) => {
							setIsBeginning(swiper.isBeginning);
							setIsEnd(swiper.isEnd);
						}}
						onSwiper={(swiper) => {
							setIsBeginning(swiper.isBeginning);
							setIsEnd(swiper.isEnd);
						}}
						breakpoints={{
							768: {
								slidesPerView: 4,
								slidesPerGroup: 4,
							},

							1440: {
								slidesPerView: 6,
								slidesPerGroup: 6,
							},
						}}
					>
						{data?.map((movie, index) => (
							<SwiperSlide key={index}>
								<CardMovie data={movie} ranking={ranking} rank={index + 1} />
							</SwiperSlide>
						))}
					</Swiper>

					<button
						className={`
							prev flexCenter group absolute right-full top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 bg-[#0007]
							${isBeginning ? 'swiper-button-disabled' : ''}
						`}
						onClick={handlePrev}
					>
						<IconMinimalArrow className="rotate-90 text-[3vw] duration-300 group-hover:scale-x-110" />
					</button>
					<button
						className={`
							next flexCenter group absolute left-full top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 bg-[#0007]
							${isEnd ? 'swiper-button-disabled' : ''}
						`}
						onClick={handleNext}
					>
						<IconMinimalArrow className="-rotate-90 text-[3vw] duration-300 group-hover:scale-x-110" />
					</button>
				</div>
			</div>
		</>
	);
}

export default memo(ListMovies);
