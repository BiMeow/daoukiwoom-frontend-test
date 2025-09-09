import ExtendedCard from '@/components/common/ExtendedCard';
import { getBaseAssetUrl } from '@/config/AppConfig';
import { MovieType } from '@/type/MovieType';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';

type CardMovieProps = {
	data?: MovieType;
};

function CardMovie({ data, ...props }: CardMovieProps) {
	const cardMovie = useRef<any>(null);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
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
				<Link href={`/movie/${data?.id}`} className="absFull" />
				<Image
					src={getBaseAssetUrl(data?.backdrop_path ?? '')}
					alt="Netflix movie thumb"
					className={`aspect-[218/123] w-full rounded-[2px] object-cover`}
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
