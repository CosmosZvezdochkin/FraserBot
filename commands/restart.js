module.exports = {
	name: 'restart',
	description: 'restarts your bot',
	execute(message, args) {
		process.exit();
	},
};