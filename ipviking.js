// SAGE2 is available for use under the SAGE2 Software License
//
// University of Illinois at Chicago's Electronic Visualization Laboratory (EVL)
// and University of Hawai'i at Manoa's Laboratory for Advanced Visualization and
// Applications (LAVA)
//
// See full text, terms and conditions in the LICENSE.txt included file
//
// Copyright (c) 2014



function addScript( url, callback ) {
	var script = document.createElement( 'script' );
	if( callback ) script.onload = callback;
	script.type = 'text/javascript';
	script.src = url;
	document.body.appendChild( script );
}


function addCss(url)
{
	var css = document.createElement('link');
	css.rel="stylesheet"
	css.href=url;
	document.body.appendChild(css);
}



var ipviking = SAGE2_App.extend( {
	construct: function() {
		arguments.callee.superClass.construct.call(this);
        this.resizeEvents = "onfinish";
        this.enableControls = true;
        this.websocketClient = null;
        this.ctx = null;
	},

	init: function(data) {
		// call super-class 'init'
		arguments.callee.superClass.init.call(this, "div", data);
		this.element.id = "content";
        var particle_legend_content = document.createElement("div");
        particle_legend_content.id = "particle-legend-content";
        this.element.appendChild(particle_legend_content);
				var div_content = document.createElement("div");
				div_content.id="content";
				this.element.appendChild(div_content);


		/*addScript("http://d3js.org/d3.v3.min.js");
		addScript("http://d3js.org/queue.v1.min.js");
		addScript("http://d3js.org/topojson.v1.min.js");*/
		/*addScript("http://map.ipviking.com/ipviking.js");*/
		addScript("uploads/apps/ipviking/res/ipviking.js");
		/*addScript("http://map.ipviking.com/presentations.js");*/

		addCss("uploads/apps/ipviking/res/layout.css");

    this.controls.finishedAddingControls(); //Not adding controls but making the default buttons available

    },

	load: function(state, date) {
	},

	draw: function(date) {

	},

	resize: function(date) {
        console.log("resize> " + this.element.width + " : " + this.element.height);
		this.refresh(date);

	},

	event: function(eventType, position, user_id, data, date) {
	}
});
