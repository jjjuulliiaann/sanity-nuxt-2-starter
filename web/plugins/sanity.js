import imageUrlBuilder from '@sanity/image-url'

export const linkQuery = `
	_type == "link" && linkType == "internal" => {
		_type,
		linkType,
		"slug": internalLink->slug.current,
		"title": internalLink->title,
		"template": internalLink->_type
	},
	_type == "link" && linkType == "external" => {
		...,
		"title": coalesce(title, href)
	}
`

export const contentBlockQuery = `
	...,
	image {..., asset->},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
		${linkQuery}
	}
`

const siteQuery = `
{
	"siteOptions": *[_id == "siteOptions"][0] {
		...,
		"pageTitle": pageTitle,
		footer[] {
			${contentBlockQuery}
		},
		ogImage {..., asset->},
		"sectionIds": {
			"about": *[_id == "about"][0].slug.current,
			"services": *[_id == "services"][0].slug.current,
			"projects": *[_id == "projects"][0].slug.current,
			"contact": *[_id == "contact"][0].slug.current,
		},
		"projectSlugs": *[_type == "project"][].slug.current,
		"infoSlugs": *[_type == "templateText"][].slug.current,
		backgroundImages[]{backgroundSetImages[]{..., asset->}}
	},
	"siteNavigation": *[_id == "siteNavigation"][0] {
		navMain[]{
			${linkQuery}
		}
	}
}
`

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
