/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"LMBR_CUSTOMER_APP/note_emission_time/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});