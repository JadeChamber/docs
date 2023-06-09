export const SITE = {
	title: 'JadeChamber',
	description: 'Amazing Astro site for Frontend Developers',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	简体中文: 'zh',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/9uVvRHXDDs`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Xiaoman - interview', link: 'en/xmzs' },
			{ text: 'TypeScript - interview', link: 'en/ts' },
			{ text: 'Learn - Resource', link: 'en/resource' },
		],
	},
	zh: {
		'章节标题': [
			{ text: '介绍', link: 'zh/introduction' },
			{ text: '小满zs - 前端面试题', link: 'zh/xmzs' },
			{ text: 'TypeScript - 面试题', link: 'zh/ts' },
			{ text: '学习资源', link: 'zh/resource' },

		],
	},
};
