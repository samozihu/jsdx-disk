"use strict";

var Disk = require('../');

var disk = new Disk();

disk.init(function() {

	var obj = disk.getStorageObject('Block', 'sdb1');

	console.log('Formating ...');
	obj.format('ext4', function(err) {

		if (err) {
			console.log(err);
			process.exit();
			return;
		}

		console.log('Done');
		process.exit();
	});
});