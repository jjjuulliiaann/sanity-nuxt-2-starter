import { BiCog } from "react-icons/bi/";

export default {
	title: "Options",
	name: "siteOptions",
	type: "document",
	icon: BiCog,
	__experimental_actions: ["update", "create", "delete", "publish"],
	fieldsets: [
		{
			title: "Header",
			name: "header",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: "Footer",
			name: "footer",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: "Cookies",
			name: "cookies",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: "SEO Defaults",
			name: "seo",
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	fields: [
		{
			title: "Page Title",
			name: "name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Header Title",
			name: "headerTitle",
			type: "string",
			fieldset: "header",
		},
		/* footer */
		{
			title: "Copyright",
			name: "copyrightText",
			type: "string",
			fieldset: "footer",
		},
		{
			title: "Footer Links",
			name: "footerLinks",
			type: "array",
			layout: "grid",
			editModal: "popover",
			of: [
				{
					type: "link",
				},
			],
			fieldset: "footer",
		},
		/* cookies */
		{
			title: "Text",
			name: "cookieText",
			type: "contentParagraph",
			fieldset: "cookies",
		},
		{
			title: "Button",
			name: "cookieButton",
			type: "string",
			fieldset: "cookies",
		},
		/* seo */
		{
			title: "SEO",
			name: "seo",
			type: "seo",
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
