import imageUrlBuilder from '@sanity/image-url'

export const contentBlockQuery = `
	...,
	image {..., asset->},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
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
	}
`

const siteOptionsQuery = `{
	"siteOptions": *[_id == "siteOptions"] [0] {
		...,
		"pageTitle": pageTitle,
		navigation[]{linkType == "internal" => {
			_type,
				linkType,
				"slug": internalLink->slug.current,
				"title": internalLink->title,
				"template": internalLink->_type
			},
			linkType == "external" => {
				...,
				"title": coalesce(title, href)
			}
		},
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
	}
}
`

export default ({ $sanity, store }, inject) => {
	// init image builder
	const builder = imageUrlBuilder($sanity.config)
	inject('builder', builder)

	// load global data
	return $sanity.fetch(siteOptionsQuery).then(({ siteOptions }) => {
		store.commit('setSiteOptions', siteOptions)
	})
}
