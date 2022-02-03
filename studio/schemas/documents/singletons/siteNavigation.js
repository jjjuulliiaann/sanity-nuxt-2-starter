import { FiFileText, FiGlobe } from "react-icons/fi/";

export default {
	title: "Navigation",
	name: "siteNavigation",
	type: "document",
	icon: FiGlobe,
	__experimental_actions: ["update", "create", "delete", "publish"],
	fields: [
		{
			title: "Main Navigation",
			name: "navMain",
			type: "array",
			layout: "grid",
			editModal: "popover",
			of: [
				{
					type: "link",
				},
			],
		},
	],
	preview: {
		prepare({}) {
			return {
				title: "Navigation",
			};
		},
	},
};
