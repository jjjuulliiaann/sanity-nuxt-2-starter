import { BiImage } from "react-icons/bi/";
import { PreviewBlockImage } from "./previews";

export default {
	title: "Image",
	name: "blockImage",
	icon: BiImage,
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
