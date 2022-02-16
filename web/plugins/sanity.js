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
	_type == "blockImage" => {
		image {..., asset->}
	},
	_type == "blockLoop" => {
		video {muxVideo{asset->}}
	},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
		${linkQuery}
	}
`

export const imageLoopArrayQuery = `
	_type == "picture" => {
		..., asset->
	},
	_type == "video" => {
		..., muxVideo{asset->}
	},
`

export const seoQuery = `
	seo {
		...,
		ogImage{asset->}
	}
`

const siteQuery = `
{
	"siteOptions": *[_id == "siteOptions"][0] {
		...,
		footerLinks[] {
			${linkQuery}
		},
		cookieText[]{
			${contentBlockQuery}
		},
		${seoQuery}
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
