export const state = () => ({
	siteOptions: {},
	navigation: {},
	pagesSlugs: [],
	projectsSlugs: [],
	window: {
		width: 0,
		height: 0,
		isMobile: false,
	},
})

export const getters = {}

export const mutations = {
	setSiteOptions(state, options) {
		state.siteOptions = options
	},
	setNavigation(state, navigation) {
		state.navigation = navigation
	},
	setPagesSlugs(state, slugs) {
		state.pagesSlugs = slugs
	},
	setProjectsSlugs(state, slugs) {
		state.projectsSlugs = slugs
	},
	setWindowWidth(state, newWidth) {
		state.window.width = newWidth
	},
	setWindowHeight(state, newHeight) {
		state.window.height = newHeight
	},
	setIsMobile(state, isMobile) {
		state.window.isMobile = isMobile
	},
}

// get all page slugs on server init
export const actions = {
	async nuxtServerInit({ commit }, { $sanity }) {
		const pagesSlugs = await $sanity
			.fetch('*[_type == "templateText"].slug.current')
			.catch((e) => {})
		commit('setPagesSlugs', pagesSlugs)
		const projectsSlugs = await $sanity
			.fetch('*[_type == "project"].slug.current')
			.catch((e) => {})
		commit('setProjectsSlugs', projectsSlugs)
	},

	windowSizeChange({ commit }, newSize) {
		commit('setWindowHeight', newSize.height)
		commit('setWindowWidth', newSize.width)
		if (newSize.width >= 700) {
			commit('setIsMobile', false)
		} else {
			commit('setIsMobile', true)
		}
	},
}
