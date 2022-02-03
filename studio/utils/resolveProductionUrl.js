const baseUrl = process.env.SANITY_STUDIO_FRONTEND_URL;
const urlQuery = "?preview=true";

export default function resolveProductionUrl(document) {
	const slug = document.slug?.current;
	if (
		!slug &&
		document._type !== "sectionIntro" &&
		document._type !== "rental"
	) {
		return undefined;
	}

	// Only show the preview option for documents for which a preview makes sense.
	if (document._type === "templateText") {
		return `${baseUrl}/info/${document.slug.current}${urlQuery}`;
	}
	if (document._type === "project") {
		return `${baseUrl}/projekte/${document.slug.current}/${urlQuery}`;
	}
	if (
		document._type === "sectionAbout" ||
		document._type === "sectionServices" ||
		document._type === "sectionProjects" ||
		document._type === "sectionContact"
	) {
		return `${baseUrl}/${document.slug.current}/${urlQuery}`;
	}
	if (document._type === "rental" || document._type === "service") {
		return `${baseUrl}/leistungen/${urlQuery}`;
	}
	if (document._type === "sectionIntro") {
		return `${baseUrl}/${urlQuery}`;
	}
	return undefined;
}
