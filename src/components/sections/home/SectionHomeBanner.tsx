import { IconInfo, IconPlay } from '@/components/common/Icon';
import { getBaseAssetUrl } from '@/config/AppConfig';
import { MovieType } from '@/type/MovieType';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

type SectionHomeBannerProps = {
	data?: MovieType;
};

function SectionHomeBanner({ data, ...props }: SectionHomeBannerProps) {
	return (
		<>
			<div className={`SectionHomeBanner relative h-[56.25vw] mb:h-dvh`}>
				<div className="cover size-full">
					<Image
						src={getBaseAssetUrl(data?.backdrop_path ?? '')}
						alt="Netflix Banner"
						className={`size-full object-cover`}
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div>

				<div className="content absolute bottom-[35%] left-[4%] z-20 w-[36%] space-y-[20px] mb:w-[75%] mb:bottom-[25%]">
					{/* <Image
						src="/images/home/banner-title.png"
						alt="Netflix Banner Title"
						className={`w-full`}
						width={0}
						height={0}
						sizes="100vw"
					/> */}
					<h1 className="text-[4vw] font-bold tl-p:text-[30px]">{data?.title}</h1>
					<p className="text-[1.2vw] tl-p:text-[16px] line-clamp-4">{data?.overview}</p>
					<div className="listBtn flex gap-[10px]">
						<div className="mainBtn flex items-center gap-[12px]">
							<IconPlay className="text-[21px]" />
							<p>Play</p>
							<Link href={`/movie/${data?.id}`} className="absFull" />
						</div>
						<div className="secBtn flex items-center gap-[12px]">
							<IconInfo className="text-[26px]" />
							<p>More Info</p>
							<Link href={`/movie/${data?.id}`} className="absFull" />
						</div>
					</div>
				</div>

				<div className="backdrop absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black to-transparent"></div>
			</div>
		</>
	);
}

export default memo(SectionHomeBanner);
