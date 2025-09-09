import { IconNotification, IconSearch, IconSmallArrow } from '@/components/common/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { memo, useEffect, useState } from 'react';

let menus = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Series', path: '#series' },
	{ id: 3, title: 'Films', path: '#films' },
];

function Header({ ...props }) {
	const pathname = usePathname();

	const [showNav, setShowNav] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);

	const onEnterPageContent = (e: boolean) => {
		setScrolled(e);
	};

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: '.pageContent',
					start: '100px top',
					end: '100px top',
					onEnter: () => onEnterPageContent(true),
					onLeaveBack: () => onEnterPageContent(false),
				},
			});

			ScrollTrigger.refresh();
		}, 400);
	}, []);

	return (
		<>
			<header
				className={`
					Header cusContainer fixed top-0 z-50 w-full duration-500
					${scrolled ? 'bg-black/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}
				`}
			>
				<div className="cusContainer relative flex items-center gap-[45px] py-[18px]">
					<Image
						src="/images/logo.png"
						alt="Netflix Logo"
						className={`w-[100px]`}
						width={0}
						height={0}
						sizes="100vw"
					/>
					<div className="menu flex gap-[20px]">
						{menus.map((menu: any, index: number) => (
							<a
								key={menu.id}
								href={menu.path}
								className={`
							text-[14px] text-[#E5E5E5] duration-300
							${(pathname == '/' && index == 0) || pathname.includes(menu.path.slice(1) || 'null') ? 'cursor-not-allowed font-medium text-white' : 'hover:opacity-75'}
							`}
							>
								{menu.title}
							</a>
						))}
					</div>
					<div className="tools ml-auto flex items-center gap-[20px]">
						<IconSearch className="cusIcon text-[21px]" />
						<IconNotification className="cusIcon text-[21px]" />
						<div className="avatar group flex cursor-pointer items-center gap-[10px]">
							<Image
								src="/images/avatar.jpg"
								alt="Netflix Logo"
								className={`aspect-1 w-[32px] rounded-sm object-cover`}
								width={0}
								height={0}
								sizes="100vw"
							/>
							<IconSmallArrow className="cusIcon text-[10px] group-hover:text-red-primary" />
						</div>
					</div>
					<div
						className={`
						nav-icon z-50 hidden tl-p:ml-auto tl-p:inline-block
						${showNav ? 'open' : ''}
					`}
						onClick={() => setShowNav(!showNav)}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
		</>
	);
}

export default memo(Header);
