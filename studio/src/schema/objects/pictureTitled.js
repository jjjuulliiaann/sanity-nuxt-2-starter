export default {
	title: "Image",
	name: "pictureTitled",
	type: "image",
	options: {
		hotspot: true,
		metadata: ["lqip"],
	},
	fields: [
		{
			title: "Alternative Text",
			name: "alt",
			type: "string",
			description: "Important for SEO and Accessibility.",
		},
		{
			title: "Caption",
			name: "caption",
			type: "text",
			rows: 4,
			options: {
				isHighlighted: true,
			},
		},
	],
	preview: {
		select: {
			asset: "asset.url",
			title: "title",
			dimensions: "asset.metadata.dimensions",
			filename: "asset.originalFilename",
		},
		prepare(selection) {
			const { asset, title, dimensions, filename } = selection;
			return {
				imageUrl: asset ? asset : "",
				title: title ? title : filename,
				subtitle: dimensions
					? `${dimensions.width}px × ${dimensions.height}px`
					: "…",
			};
		},
	},
};
