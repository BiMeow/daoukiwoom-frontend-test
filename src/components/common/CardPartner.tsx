import Link from 'next/link';
import { memo } from 'react';

function CardPartner({ data, image, ...props }: any) {
	return (
		<>
			<div
				className={`CardPartner bgGradientMain flexCenter //aspect-[370/122] group relative w-full overflow-hidden rounded-[12px] border border-orange`}
			>
				{/* <div className="image h-[calc(100%-2px)] w-[calc(100%-2px)] overflow-hidden rounded-[11px] bg-white">
					<img
						src={data.image}
						alt="Daoukiwoom Frontend Test Partner"
						className={`size-full bg-white object-contain`}
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div> */}
				<img
					src={data?.image || image}
					alt="Daoukiwoom Frontend Test Partner"
					className={`
					aspect-[370/122] size-full bg-white object-contain p-[20px]
					${data?.href && 'duration-500 group-hover:scale-105'}
					`}
					width={0}
					height={0}
					sizes="100vw"
				/>
				{data?.href && <Link href={data?.href} target="_blank" className="absFull" />}
			</div>
		</>
	);
}

export default memo(CardPartner);
