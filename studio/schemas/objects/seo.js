export default {
	title: "SEO",
	name: "seo",
	type: "object",
	collapsible: true,
	collapsed: true,
	fieldsets: [
		{
			title: "Settings",
			name: "seo",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	fields: [
		{
			title: "Meta Description",
			name: "metaDescription",
			type: "text",
			fieldset: "seo",
		},
		{
			title: "Meta Keywords",
			name: "metaKeywords",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
			fieldset: "seo",
		},
		{
			title: "OG Image",
			name: "ogImage",
			type: "image",
			description: "1200px x 630px recommended",
			fieldset: "seo",
		},
	],
};
