import S from "@sanity/desk-tool/structure-builder";
import { FiEye, FiTarget } from "react-icons/fi/";

// create document items
const collectionList = ({ id, defaultOrdering = [] }) =>
	S.documentTypeListItem(id).child(
		S.documentTypeList(id).defaultOrdering(defaultOrdering)
	);

const singletonPage = ({ id, schemaType }) =>
	S.documentTypeListItem(schemaType).child(
		S.document().schemaType(schemaType).id(id)
	);

// navigation structure
export default () => S.list().title("Content").items([]);
