export default {
	title: "Image",
	name: "picture",
	type: "image",
	options: {
		hotspot: true,
		metadata: ["lqip"],
	},
	fields: [
		{
			name: "alt",
			type: "string",
			title: "Alternative Text",
			description: "Important for SEO and Accessibility.",
		},
	],
	preview: {
		select: {
			asset: "asset.url",
			dimensions: "asset.metadata.dimensions",
			filename: "asset.originalFilename",
		},
		prepare(selection) {
			const { asset, dimensions, filename } = selection;
			return {
				imageUrl: asset ? asset : "",
				title: filename,
				subtitle: dimensions
					? `${dimensions.width}px × ${dimensions.height}px`
					: "…",
			};
		},
	},
};
