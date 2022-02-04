import debounce from '~/plugins/helpers'

// custom implementation
export default ({ store }) => {
	store.dispatch('windowSizeChange', {
		width: window.innerWidth,
		height: window.innerHeight,
	})
	window.onresize = debounce(function () {
		store.dispatch('windowSizeChange', {
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, 300)
}
