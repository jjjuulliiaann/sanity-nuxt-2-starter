import React from "react";
import { FiSmile } from "react-icons/fi/";

// Render custom content in Editor
export const renderHeadline = ({ children }) => (
	<span style={{ fontWeight: "bold", fontSize: "1rem" }}>{children}</span>
);

export const renderSmall = ({ children }) => (
	<span style={{ fontSize: "0.8rem", lineHeight: 0.8 }}>{children}</span>
);

export const renderIcon = ({ children, text }) => {
	if (text === "") return null;

	return (
		<span
			style={{
				background: "rgb(239,239,243)",
				borderRadius: "0.2rem",
				padding: "0.2rem",
			}}
		>
			<FiSmile
				style={{
					position: "relative",
					top: "0.12rem",
					paddingRight: "0.2rem",
				}}
			/>
			{children}
		</span>
	);
};
