import S from "@sanity/desk-tool/structure-builder";
import { FiEye } from "react-icons/fi/";

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
export default () =>
	S.list()
		.title("Content")
		.items([
			singletonPage({
				id: "templateHome",
				schemaType: "templateHome",
				preview: false,
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
				preview: false,
			}),

			singletonPage({
				id: "siteOptions",
				schemaType: "siteOptions",
				preview: false,
			}),
		]);
