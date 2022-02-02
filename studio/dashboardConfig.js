export default {
	widgets: [
		{
			name: "netlify",
			options: {
				title: "Website Deployment",
				sites: [
					{
						title: "Website ",
						apiId: process.env.NETLIFY_API_ID,
						buildHookId: process.env.NETLIFY_BUILD_HOOK_ID,
						name: process.env.FRONTEND_NAME,
						url: process.env.FRONTEND_URL,
					},
				],
			},
		},
		{
			name: "useful-links",
			layout: {
				width: "small",
				height: "small",
			},
		},
	],
};
