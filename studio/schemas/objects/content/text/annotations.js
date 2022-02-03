import { FiLink, FiPaperclip } from "react-icons/fi/";

// Annotate text with additional information
export const annotations = [
	{
		title: "Link",
		name: "link",
		type: "object",
		blockEditor: {
			icon: FiLink,
		},
		fields: [
			{
				title: "Type",
				name: "linkType",
				type: "string",
				options: {
					list: [
						{ title: "Extern", value: "external" },
						{ title: "Internal", value: "internal" },
					],
					layout: "radio",
				},
			},
			{
				title: "URL",
				name: "href",
				type: "url",
				hidden: ({ parent }) => parent?.linkType !== "external",
				validation: (Rule) =>
					Rule.uri({
						allowRelative: true,
						scheme: ["https", "http", "mailto", "tel"],
					}),
			},
			{
				title: "Open in new tab?",
				name: "blank",
				type: "boolean",
				hidden: ({ parent }) => parent?.linkType !== "external",
			},
			{
				title: "Internal Link",
				name: "internalLink",
				type: "reference",
				hidden: ({ parent }) => parent?.linkType !== "internal",
				to: [
					{ type: "templateHome" },
					{ type: "templateText" },
					{ type: "templateProjects" },
					{ type: "project" },
				],
			},
		],
	},
	{
		title: "Download",
		name: "download",
		type: "file",
		blockEditor: {
			icon: FiPaperclip,
		},
	},
];
