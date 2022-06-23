import imageUrlBuilder from '@sanity/image-url'
import { siteQuery } from '@/queries/contentQueries'

export default ({ $sanity, store }, inject) => {
	// init image builder
	const builder = imageUrlBuilder($sanity.config)
	inject('builder', builder)

	// load global data
	return $sanity.fetch(siteQuery).then(({ siteOptions, siteNavigation }) => {
		store.commit('setSiteOptions', siteOptions)
		store.commit('setSiteNavigation', siteNavigation)
	})
}
