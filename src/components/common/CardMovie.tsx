import ExtendedCard from '@/components/common/ExtendedCard';
import { getBaseAssetUrl } from '@/config/AppConfig';
import { MovieType } from '@/type/MovieType';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

type CardMovieProps = {
	data?: MovieType;
	ranking?: boolean;
	rank?: number;
};

function CardMovie({ data, ranking = false, rank = 0, ...props }: CardMovieProps) {
	const cardMovie = useRef<any>(null);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const { width } = useWindowSize();

	const [showExtended, setShowExtended] = useState<boolean>(false);
	const [positionExtended, setPositionExtended] = useState<'center' | 'left' | 'right'>('left');

	const handleMouseEnter = () => {
		timerRef.current = setTimeout(() => {
			setShowExtended(true);
		}, 500);
	};

	const handleMouseLeave = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
		setShowExtended(false);
	};

	useEffect(() => {
		if (cardMovie.current) {
			let vw = innerWidth;

			let padding = innerWidth * 0.04;
			if (width < 1000) padding = 20;

			let cardRect = cardMovie.current.getBoundingClientRect();
			if (padding - cardRect.left < 1 && padding - cardRect.left > 0) {
				setPositionExtended('left');
			} else if (vw - cardRect.right - padding < 1 && vw - cardRect.right - padding > 0) {
				setPositionExtended('right');
			} else {
				setPositionExtended('center');
			}
		}
		return () => {};
	}, [cardMovie]);

	return (
		<>
			<div
				ref={cardMovie}
				className={`CardMovie relative cursor-pointer`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<Link href={`/movie/${data?.id}`} className="absFull z-20" />
				{rank && ranking && (
					<p
						className={`
						rank textStroke absolute left-0 top-1/2 w-[55%] -translate-y-1/2 font-bold leading-[1] tracking-[-20px] text-black
						${rank >= 10 ? 'text-left text-[10vw]' : 'text-right text-[12vw]'}
						`}
					>
						{rank}
					</p>
				)}
				<Image
					src={getBaseAssetUrl(data?.backdrop_path ?? '')}
					alt="Netflix movie thumb"
					className={`
					relative z-10 rounded-[2px] object-cover
					${ranking ? 'ml-auto aspect-[109/154] w-[50%]' : 'aspect-[218/123] w-full'}
					`}
					width={0}
					height={0}
					sizes="100vw"
				/>
				<AnimatePresence>
					{showExtended && <ExtendedCard data={data} positionExtended={positionExtended} />}
				</AnimatePresence>
			</div>
		</>
	);
}

export default memo(CardMovie);
