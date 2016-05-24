# VideoBuddy plugin
A plugin that fixes the iframe on the window when video is no longer visible.
http://amzuh.github.io/videoplugin/

To execute the plugin properly you should 

		# Config the attributes where, 

		var myvide = new Vplugin({
			video: 'videoID', 			-> Video ID
			vwidth: 250, 				    -> Width that video will have after attached
			vheight: 200, 				  -> Height that video will have after attached
			top: 25, 					      -> Distance from the top
			right: 20 					    -> Distance from the right
		});

		# And after that you are able to init the plugin simply by doing:
		
		myvide.init();
		
Now, when you scroll past your iframe you will see it move to the top right of your page. Scrolling back up should put the video on the original position.

Enjoy :)




