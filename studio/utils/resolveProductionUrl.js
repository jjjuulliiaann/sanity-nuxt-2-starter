const baseUrl = process.env.SANITY_STUDIO_FRONTEND_URL;
const urlQuery = "?preview=true";

export default function resolveProductionUrl(document) {
	// set slug to empty string if no slug exists
	let slug = document.slug ? document.slug?.current : "";
	// return undefined if no current slug is set
	if (typeof slug === "undefined") {
		return undefined;
	}

	// Generate preview production url according to frontend route setup
	if (document._type === "project") {
		return `${baseUrl}/projekte/${slug}/${urlQuery}`;
	}
	return `${baseUrl}/${slug}${urlQuery}`;
}
