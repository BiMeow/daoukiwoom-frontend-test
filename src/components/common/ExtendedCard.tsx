import {
	IconLikeCircle,
	IconMinimalArrowCircle,
	IconPlay,
	IconPlayCircle,
	IconPlusCircle,
} from '@/components/common/Icon';
import { useStorage } from '@/components/context/StorageProvider';
import { getBaseAssetUrl } from '@/config/AppConfig';
import { MovieType } from '@/type/MovieType';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';

type ExtendedCardProps = {
	data?: MovieType;
	positionExtended?: 'center' | 'left' | 'right';
};

function ExtentedCard({ data, positionExtended = 'center', ...props }: ExtendedCardProps) {
	const { listGenres } = useStorage();

	return (
		<>
			<div
				className={`
					position absolute top-0 z-[444]
					${positionExtended === 'center' && 'left-1/2 !-translate-x-1/2'}
					${positionExtended === 'left' && 'left-0'}
					${positionExtended === 'right' && 'right-0'}
				`}
			>
				<motion.div
					className={`
					ExtentedCard w-[20vw] cursor-pointer rounded-[4px] bg-[#111] shadow-lg
					${positionExtended === 'center' && 'origin-top'}
					${positionExtended === 'left' && 'origin-top-left'}
					${positionExtended === 'right' && 'origin-top-right'}
				`}
					initial={{ opacity: 0, scale: 0.5, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 0 }}
					transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.5 }}
				>
					<Link href={`/movie/${data?.id}`}>
						<Image
							src={getBaseAssetUrl(data?.poster_path ?? '')}
							alt="Netflix movie thumb"
							className={`aspect-[218/123] w-full rounded-[2px] object-cover`}
							width={0}
							height={0}
							sizes="100vw"
						/>
					</Link>

					<div className="content space-y-[20px] p-[20px]">
						<Link href={`/movie/${data?.id}`}>
							<h3 className="text-[20px]">{data?.title}</h3>
						</Link>
						<div className="listBtn flex items-center gap-[15px] text-[40px] text-[#fff4]">
							<Link href={`/movie/${data?.id}`}>
								<IconPlayCircle className="duration-300 hover:opacity-75" />
							</Link>
							<IconPlusCircle className="duration-300 hover:text-white" />
							<IconLikeCircle className="duration-300 hover:text-white" />
							<Link href={`/movie/${data?.id}`} className="ml-auto ">
								<IconMinimalArrowCircle className="duration-300 hover:text-white" />
							</Link>
						</div>
						<div className="info flex items-center gap-[15px] text-[#fff4]">
							<p className="age border border-[#fff4] p-[5px]">T18</p>
							<p>{data?.popularity}</p>
							<p>{data?.vote_count}</p>
						</div>
						<div className="genres flex items-center gap-[5px]">
							{data?.genre_ids?.map((genre, index) => (
								<p key={index} className="text-[#fff4]">
									{listGenres?.find((e: any) => e.id == genre)?.name}{' '}
									{index < data?.genre_ids?.length - 1 && <span className="mx-[5px]">•</span>}
								</p>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default memo(ExtentedCard);
