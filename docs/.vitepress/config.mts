import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'My Awesome Project',
	description: 'A VitePress Site',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '指南', link: '/guild/' },
			{ text: '组件', link: '/components/button/' },
		],
		sidebar: {
			'/guild/': [
				{
					text: '基础',
					items: [
						{
							text: '安装',
							link: '/guild/installation',
						},
						{
							text: '快速开始',
							link: '/guild/quickstart',
						},
					],
				},
				{
					text: '进阶',
					items: [
						{
							text: 'xx',
							link: '/xx',
						},
					],
				},
			],
			'/components/': [
				{
					text: '基础组件',
					items: [
						{
							text: 'Button',
							link: '/components/button',
						},
					],
				},
			],
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/liruixiang321/arim-ui' }],
	},
})
