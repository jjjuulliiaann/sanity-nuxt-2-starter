import groq from 'groq'
import {
	contentBlockQuery,
	seoQuery,
	linkQuery,
	imageLoopArrayQuery,
} from '@/queries/helperQueries'

export const slugsQuery = groq`{
	"pages": *[_type == "templateText"].slug.current,
	"projects": *[_type == "project"].slug.current,
}`

export const siteQuery = groq`{
	"siteOptions": *[_id == "siteOptions"][0] {
		...,
		footerLinks[] {
			${linkQuery}
		},
		${seoQuery}
	},
	"siteNavigation": *[_id == "siteNavigation"][0] {
		navMain[]{
			${linkQuery}
		}
	}
}`

export const homeQuery = groq`*[(
	_type == "pageHome")] | order(_updatedAt desc)[0]{
		...,
		content[] {
			${contentBlockQuery}
		},
}`

export const pageTextQuery = groq`
*[_type == 'pageText' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	${seoQuery}
}
`

export const projectsQuery = groq`
*[(_id == "pageProjects")] | order(_updatedAt desc)[0]{
	...,
	projects[]->{title, slug, "firstImage": images[0]{..., asset->}},
	${seoQuery}
}
`

export const singleProjectQuery = groq`
*[_type == 'project' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	images[]{
		${imageLoopArrayQuery}
	},
	${seoQuery}
}
`
