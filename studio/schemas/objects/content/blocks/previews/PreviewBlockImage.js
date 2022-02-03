import React, { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export const PreviewBlockImage = ({ value }) => {
	if (!value) return null;
	const { _type, image, title } = value;

	const url = image ? urlFor(image).width(1000).url() : undefined;
	const isSmall = _type === "blockImageSmall";

	return (
		<div>
			<div style={{ padding: isSmall ? "1rem" : "1rem" }}>
				<img
					style={{
						display: "block",
						width: isSmall ? "10rem" : "25%",
					}}
					src={url}
				/>
			</div>
		</div>
	);
};
