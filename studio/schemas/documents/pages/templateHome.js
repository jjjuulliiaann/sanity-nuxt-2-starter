import { FiHome } from "react-icons/fi/";

export default {
	title: "Home",
	name: "templateHome",
	type: "document",
	icon: FiHome,
	__experimental_actions: ["update", "create", "delete", "publish"],
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
	],
	preview: {
		prepare({}) {
			return {
				title: "Home",
			};
		},
	},
};
