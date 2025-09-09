// FIXME: Update this configuration file based on your project information

const AppConfig = {
	getBaseUrl: (url = '') => {
		if (url?.endsWith('/')) {
			url = url.slice(0, -1);
		}
		return process.env.APP_URL ? `${process.env.APP_URL}${url}` : `https://www.immi-go.com${url}`;
	},
	locale: 'vi',
	icons: {
		favicon: `/images/favicon.png`,
		icon: `/images/favicon.png`,
		shortcut: `/images/favicon.png`,
		apple: `/images/favicon.png`,
		other: {
			rel: 'favicon.png',
			url: `/images/favicon.png`,
		},
	},
};

export default AppConfig;

export const getApiBaseUrl = (path = '') => {
	return `${process.env.NEXT_PUBLIC_BASE_API_URL || ''}${path}`;
};

export const getBaseAssetUrl = (path = '') => {
	return `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}${path}?v=${process.env.PUBLIC_ASSET_VERSION || ''}`;
};
