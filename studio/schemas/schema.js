// imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import project from "./documents/collections/project";
import templateHome from "./documents/pages/templateHome";
import templateProjects from "./documents/pages/templateProjects";
import templateText from "./documents/pages/templateText";
import siteOptions from "./documents/singletons/siteOptions";
import siteNavigation from "./documents/singletons/siteNavigation";
// objects
import contentText from "./objects/content/contentText";
import contentParagraph from "./objects/content/contentParagraph";
import contentFull from "./objects/content/contentFull";
import blockImage from "./objects/content/blocks/blockImage";
import link from "./objects/link";
import picture from "./objects/picture";
import seo from "./objects/seo";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// documents
		project,
		templateHome,
		templateProjects,
		templateText,
		siteOptions,
		siteNavigation,
		// objects
		contentText,
		contentParagraph,
		contentFull,
		blockImage,
		link,
		picture,
		seo,
	]),
});
