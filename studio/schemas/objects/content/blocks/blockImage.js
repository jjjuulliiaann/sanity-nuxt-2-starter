import { FiImage } from "react-icons/fi/";
import { PreviewBlockImage } from "./previews";

export default {
	title: "Image",
	name: "blockImage",
	icon: FiImage,
	type: "object",
	fields: [
		{
			title: "Image",
			name: "picture",
			type: "picture",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			image: "picture.asset",
			title: "picture.asset.originalFilename",
		},
		component: PreviewBlockImage,
	},
};
