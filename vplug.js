(function() {

/* To execute the plugin properly you should 

		# Config the attributes where, 

		var myvide = new Vplugin({
			video: 'videoID', 			-> Video ID
			vwidth: 250, 				-> Width that video will have after attached
			vheight: 200, 				-> Height that video will have after attached
			top: 25, 					-> Distance from the top
			right: 20 					-> Distance from the right
		});

		# And after that you are able to init the plugin simply by doing:
		
		myvide.init();

*/

    // Define our constructor to build object
	this.Vplugin = function() {
		// defaults paramets
	    var defaults = {
	      video: 'videoID',
	      vwidth: 250,
	      vheight: 125,
	      top: 25,
	      right: 20
	    }

	    // Create options by extending defaults with the passed in arugments
	    if (arguments[0] && typeof arguments[0] === "object") {
	      this.options = extendDefaults(defaults, arguments[0]);
	    }

	    
		// Utility method to extend defaults with user options
		function extendDefaults(source, properties) {
			var property;
		   	for (property in properties) {
		    	if (properties.hasOwnProperty(property)) {
		       		source[property] = properties[property];
		    	}
		 	}
		    return source;
		}
	
	}


	// Public init Method

	Vplugin.prototype.init = function() {
		// private vars
		var obj = this;
		var video = document.getElementById(obj.options.video);
		var box = video.getBoundingClientRect();
		
		// General vars
		obj.vid = document.getElementById(obj.options.video);
		obj.attached = false;
		obj.videoPos = parseInt(box.top) + parseInt(obj.vid.height);
		obj.pos = obj.vid.style.position;
		obj.width = obj.vid.style.width;
		obj.height = obj.vid.height;
		
		// Core functionality
		window.onscroll = function(){
			if(window.pageYOffset > obj.videoPos && !obj.attached) {
				attachVideo.call(obj);
			} else if(window.pageYOffset < obj.videoPos && obj.attached) {
				dettachVideo.call(obj);

			}
		}; 
	}

	// Pirvate Functions

	
	//
	function attachVideo() {
		if(!this.attached){
			// min height parent element to keep website in position
			this.vid.parentElement.style.minHeight = this.vid.height;
			this.vid.style.position = "fixed";
			this.vid.style.width = this.options.vwidth +"px";
			this.vid.style.height = this.options.vheight+ "px";
			this.vid.style.top = this.options.top+"px";
			this.vid.style.right = this.options.right+"px";

			this.attached = true;
		}
	}


	function dettachVideo() {	
		var obj = this;
		// Back to original position
		obj.vid.style.position = "relative";
		obj.vid.style.width = obj.width;
		obj.vid.style.height = obj.height;
		obj.vid.style.top = "0px";
		obj.vid.style.right = "0px";
		// Cant append because video would reload 
		// document.getElementById(video_parent).appendChild(obj.vid);
		this.attached = false;	
	}
	

}());

