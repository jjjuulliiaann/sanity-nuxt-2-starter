import S from "@sanity/desk-tool/structure-builder";
import PreviewComponent from "./utils/preview";
import { FiEye } from "react-icons/fi/";

// create preview view
const previewComponentView = S.view
	.component(PreviewComponent)
	.title("Preview");

export const getDefaultDocumentNode = () => {
	return S.document().views([S.view.form(), previewComponentView]);
};

// create document items
const collectionList = ({ id, defaultOrdering = [] }) =>
	S.documentTypeListItem(id).child(
		S.documentTypeList(id).defaultOrdering(defaultOrdering)
	);

const singletonPage = ({ id, schemaType, preview = false }) =>
	S.documentTypeListItem(schemaType).child(
		S.document()
			.schemaType(schemaType)
			.id(id)
			.views([S.view.form(), ...(preview ? [previewComponentView] : [])])
	);

// navigation structure
export default () =>
	S.list()
		.title("Content")
		.items([
			singletonPage({
				id: "templateHome",
				schemaType: "templateHome",
				preview: true,
			}),

			S.listItem()
				.title("Projects")
				.icon(FiEye)
				.child(
					S.list()
						.title("Projects")
						.items([
							collectionList({
								id: "project",
								defaultOrdering: [
									{
										field: "title",
										direction: "asc",
									},
								],
							}),

							S.divider(),

							singletonPage({
								id: "templateProjects",
								schemaType: "templateProjects",
								preview: true,
							}),
						])
				),

			S.divider(),

			collectionList({
				id: "templateText",
				defaultOrdering: [
					{
						field: "title",
						direction: "asc",
					},
				],
			}),

			singletonPage({
				id: "siteNavigation",
				schemaType: "siteNavigation",
			}),

			singletonPage({
				id: "siteOptions",
				schemaType: "siteOptions",
			}),
		]);
