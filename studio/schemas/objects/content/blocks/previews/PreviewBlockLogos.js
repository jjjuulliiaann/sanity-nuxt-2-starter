import React, { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export const PreviewBlockLogos = ({ value }) => {
	if (!value) return null;
	const { _type, logos } = value;

	const logoItems = [];
	if (!logos) {
		return false;
	}
	for (const [index, value] of logos.entries()) {
		const url =
			value && value.asset ? urlFor(value).width(500).url() : undefined;
		logoItems.push(
			<li
				style={{
					boxSizing: "border-box",
					width: "50%",
					maxWidth: "300px",
					padding: "0.5rem 3rem",
				}}
				key={index}
			>
				<img
					style={{
						width: "100%",
						height: "auto",
					}}
					src={url}
				/>
			</li>
		);
	}

	return (
		<ul
			style={{
				display: "flex",
				flexFlow: "row wrap",
				justifyContent: "center",
				alignItems: "center",
				padding: "2rem 0rem",
				margin: "0rem",
				backgroundColor: "rgb(0,0,0)",
				listStyle: "none",
			}}
		>
			{logoItems}
		</ul>
	);
};
