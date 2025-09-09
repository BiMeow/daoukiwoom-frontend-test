import { IconFacebook, IconYoutube } from '@/components/common/Icon';
import Link from 'next/link';
import { memo } from 'react';

let menu = [
	[
		{
			title: 'Audio Description',
		},
		{
			title: 'Investor Relations',
		},
		{
			title: 'Legal Notices',
		},
	],
	[
		{
			title: 'Help Center',
		},
		{
			title: 'Jobs',
		},
		{
			title: 'Cookie Preferences',
		},
	],
	[
		{
			title: 'Gift Cards',
		},
		{
			title: 'Terms of Use',
		},
		{
			title: 'Corporate Information',
		},
	],
	[
		{
			title: 'Media Centre',
		},
		{
			title: 'Privacy',
		},
		{
			title: 'Contact Us',
		},
	],
];

function Footer({ ...props }) {
	return (
		<>
			<footer className={`Footer cusContainer mt-[100px] max-w-[1000px] space-y-[20px] pb-[20px]`}>
				<div className="social flex gap-[20px] text-[30px] text-white">
					<Link href={'#'} className="duration-300 hover:text-red-primary">
						<IconFacebook />
					</Link>
					<Link href={'#'} className="duration-300 hover:text-red-primary">
						<IconYoutube />
					</Link>
				</div>
				<div className="grid grid-cols-4">
					{menu?.map((col: any, index: number) => (
						<div className="col space-y-[10px]" key={index}>
							{col.map((item: any, index2: number) => (
								<Link
									href={'#'}
									key={index2}
									className="block text-[#777] duration-300 hover:text-white"
								>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
				<p className="text-[14px] text-[#777]">© 1997 - 2024 Netflix, Inc.</p>
			</footer>
		</>
	);
}

export default memo(Footer);
