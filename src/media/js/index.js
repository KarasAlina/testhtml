global.$ = global.jQuery = require('jquery');
require('./utils/jqExtensions');
require('slick-carousel');

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
	this.env = require('./utils/ENV');
	this.dom = require('./utils/DOM');
	this.utils = require('./utils/Utils');

	this.classes = {
		Callback: require('./classes/Callback')
	};

	this.helpers = {};
	this.modules = {
		SlickSlider: require('./modules/SlickSlider'),
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
		
	});
}();

if (module.hot) {
	module.hot.accept();
}
