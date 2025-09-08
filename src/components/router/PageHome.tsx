'use client';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

function PageHome({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageHome mainPage`}>
				PageHome
			</div>
		</>
	);
}

export default memo(PageHome);
