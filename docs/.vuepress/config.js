module.exports = {
	base: '/',
	title: '阿冰 的博客',
	description: '每天进步一点点',
	ga: 'UA-18839126297-1',
	themeConfig: {
		nav: [
			{
				text: '更多',
				items: [
					{ text: '代码片段收集', link: 'https://github.com/yangnbingisok/yangnbingisok.github.io' },
					{ text: 'GitHub', link: 'https://github.com/yangnbingisok/' },
				],
			},
		],
		lastUpdated: '上次更新', // string | boolean
		sidebar: [
			{
				title: 'JS 相关',
				collapsable: false,
				children: ['view/js-base/promise', 'view/js-base/compressImage', 'view/js-base/task'],
			},
			{
				title: 'JS业务功能',
				collapsable: false,
				children: ['view/js-business/fastAlgorithm', 'view/js-business/time'],
			},
			{
				title: 'JS高级编程设计',
				collapsable: false,
				children: [
					'view/js-book/advanced',
					'view/js-book/bestPractice',
					'view/js-book/canvas',
					'view/js-book/context',
					'view/js-book/env',
					'view/js-book/event',
					'view/js-book/oop',
					'view/js-book/referenceType',
				],
			},
			{
				title: 'underscore源码解析',
				collapsable: false,
				children: ['view/underscore/restArgs', 'view/underscore/tip'],
			},
			{
				title: 'snabbdom源码解析',
				collapsable: false,
				children: [
					'view/vue/snabbdom/prepare.md',
					'view/vue/snabbdom/h.md',
					'view/vue/snabbdom/vnode.md',
					'view/vue/snabbdom/patch.md',
					'view/vue/snabbdom/hooks.md',
					'view/vue/snabbdom/modules.md',
					'view/vue/snabbdom/event.md',
					'view/vue/snabbdom/util.md',
				],
			},
			{
				title: 'vue-router源码解析',
				collapsable: false,
				children: [
					'view/vue/vue-router/prepare.md',
					'view/vue/vue-router/plugin.md',
					'view/vue/vue-router/mode.md',
					'view/vue/vue-router/match.md',
					'view/vue/vue-router/navEvent.md',
					'view/vue/vue-router/component.md',
					'view/vue/vue-router/scroll.md',
					'view/vue/vue-router/async.md',
				],
			},
			{
				title: '算法',
				collapsable: false,
				children: ['view/algorithm/baseSort', 'view/algorithm/advanceSort'],
			},
			{
				title: '其他',
				collapsable: false,
				children: ['other/git', 'other/rem', 'other/weixinDebug', 'other/highQualityCode', 'other/cache', 'other/http'],
			},
			'aboutMe/',
		],
	},
};
