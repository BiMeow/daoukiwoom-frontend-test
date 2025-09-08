import { memo } from 'react';
import { useRouter } from 'next/navigation';
import CardPartner from '@/components/common/CardPartner';

let listPartner = [
	{
		image: '/images/home/partner-1.jpg',
		href: 'https://btinternational.vn/',
	},
	{
		image: '/images/home/partner-2.jpg',
		href: 'https://klaus-refrigeration.com/company/',
	},
	{
		image: '/images/home/partner-3.jpg',
		href: 'https://3qhospitality.com/',
	},
	{
		image: '/images/home/partner-4.jpg',
		href: 'https://schroder.mondialwebsite.com/',
	},
];

function SectionPartner({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionPartner secSpacing bg-white py-[64px]`}>
				<div className="cusContainer">
					<h2 className="secTitle fadeUpScroll mb-[30px] text-center">Our Member Companies</h2>

					<div className="listPartner fadeUpScroll mx-auto grid max-w-[770px] grid-cols-2 gap-[30px] mb:max-w-[275px] mb:grid-cols-1 mb:gap-[20px]">
						{listPartner.map((e, index) => (
							<div className="itemPartner" key={index}>
								<CardPartner data={e} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionPartner);
