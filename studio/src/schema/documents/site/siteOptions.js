import { BiCog } from "react-icons/bi/";

export default {
	title: "Options",
	name: "siteOptions",
	type: "document",
	icon: BiCog,
	__experimental_actions: ["update", "create", "delete", "publish"],
	groups: [
		{
			title: "Page",
			name: "page",
			default: true,
		},
		{
			title: "Footer",
			name: "footer",
		},
		{
			title: "SEO",
			name: "seo",
		},
	],
	fields: [
		{
			title: "Page Title",
			name: "name",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "page",
		},
		{
			title: "Header Title",
			name: "headerTitle",
			type: "string",
			group: "page",
		},
		/* footer */
		{
			title: "Copyright",
			name: "copyrightText",
			type: "string",
			group: "footer",
		},
		{
			title: "Footer Links",
			name: "footerLinks",
			type: "array",
			layout: "grid",
			editModal: "popover",
			of: [
				{
					type: "internalLink",
				},
				{
					type: "externalLink",
				},
			],
			group: "footer",
		},
		/* seo */
		{
			title: "Language Code",
			description:
				"ISO 639-1 Language Codes, i.e. „de“ or „en“. You can add a country code like this: „en-us“",
			name: "language",
			type: "string",
			group: "seo",
		},
		{
			title: "SEO",
			name: "seo",
			type: "seo",
			group: "seo",
		},
	],
	preview: {
		prepare({}) {
			return {
				title: "Options",
			};
		},
	},
};
