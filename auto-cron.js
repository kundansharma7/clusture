var cluster = require('cluster');
var logger = require('./logger');

module.exports = function (i) {
	if (cluster.isMaster || (cluster.isWorker )) {
	   //&& cluster.worker.id == '1')) {
		++i;
		console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEE', i);
		logger.info('log to file', i);
		logger.info(process.env.NODE_APP_INSTANCE);
		logger.info(process.env.pm_id);
		logger.info(process.env.name);
	}

	console.log(cluster.isMaster);
	console.log(cluster.isWorker)
}