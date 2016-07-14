'use strict';

module.exports = {
	route: {
		doc: 'The route of the plugin',
		format: String,
		default: '/sample',
		env: 'SUPINBOT_SAMPLE_ROUTE'
	},
	display_name: {
		doc: 'The display name of the route',
		format: String,
		default: 'Sample Route',
		env: 'SUPINBOT_SAMPLE_DISPLAY_NAME'
	}
};
