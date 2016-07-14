'use strict';

const pkg = require('./package.json');
const routes = require('./routes/index');

// Called when the module is loaded, prociding the SupinBot object.
module.exports = function(SupinBot) {
	// Loads the config using the schema defined in lib/config.js
	var config = SupinBot.config.loadConfig(require('./lib/config'));

	// Registers a new route using the router in routes/index.js
	SupinBot.WebApp.registerRoute(pkg.name, config.get('route'), config.get('display_name'), routes);

	// Adds a new chat command to SupinBot.
	SupinBot.CommandManager.addCommand('sample', function(user, channel, args, argsStr) {
		SupinBot.postMessage(channel.id, 'I am a sample command!');
	})
	.setDescription('A command that echoes "I am a sample command!" in the current channel.');
};
