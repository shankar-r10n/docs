export const SITE = {
	title: 'Kubeshark',
	description: 'Kubernetes deep visibility.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
    mascot?: string;
    mascotSize: number;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/kubeshark/docs/tree/master`;

export const DISCORD_SERVER_INVITE = `https://discord.gg/WkvRGMUcx7`;
export const SLACK_WORKSPACE_INVITE = `https://join.slack.com/t/kubeshark/shared_invite/zt-1k3sybpq9-uAhFkuPJiJftKniqrGHGhg`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'main',
	appId: 'JS4V288LOI',
	apiKey: 'e0614ede1abb0d9f1e03350b5dfb1114',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Anatomy of Kubeshark', link: 'en/anatomy_of_kubeshark' },
			{ text: 'Install & Deploy', link: 'en/install' },
            { text: 'Clean Up', link: 'en/clean_up' },
		],
        'Features': [
            { text: 'Network Sniffing', link: 'en/network_sniffing' },
            { text: 'Querying', link: 'en/querying' },
            { text: 'Kernel Tracing', link: 'en/kernel_tracing' },
            { text: 'Validation', link: 'en/validation' },
            { text: 'Service Map', link: 'en/service_map' },
            { text: 'Redaction', link: 'en/redaction' },
        ],
        // 'Advanced': [
        //     { text: 'Installing plugins', link: 'en/installing_plugins' },
        //     { text: 'Developing plugins', link: 'en/developing_plugins' },
        //     { text: 'Hooks reference', link: 'en/hooks_reference' },
        //     { text: 'Integrations', link: 'en/integrations' },
        // ],
	},
};
