











function setScaleBasedOnScreenWidth() {
	  // Get the target element by its class name
	  var element = document.querySelector('.O7ADyQ');

	  // Calculate the scale ratio
	  var screenWidth = window.innerWidth;
	  var originalWidth = 1920; // The original width of your div
	  var scaleRatio = screenWidth / originalWidth;

	  scaleRatio -= 0.1;
	  console.log("Here is the scale ratio " + scaleRatio);
	  if (scaleRatio < 0.23) {
	  	scaleRatio = 0.23;
	  }
	  if (scaleRatio > 0.75) {
	  	scaleRatio = 0.75;
	  }



	  // Set the transform scale to the element

	  var calcWidth = 1920 * scaleRatio;
	  var margin = (screenWidth - calcWidth)/2;
	  margin = margin - margin*0.1;
	  console.log("Here is the margin ratio " + margin);
	  var calcHeight = 1080 * scaleRatio;
	  var marginBottom = (window.innerHeight - calcHeight)*2;
	  var setBottom = Math.abs(marginBottom) * -1;
    $(".O7ADyQ").each( function(e) {
  		this.style.transform = 'scale(' + scaleRatio + ')';
		if (margin > 0) {
		  	this.style.left = margin + 'px';
		}
		this.style.marginBottom = setBottom + 'px';
    });
}

// Call the function on window resize and on initial load
window.addEventListener('resize', setScaleBasedOnScreenWidth);
setScaleBasedOnScreenWidth(); // Also call it when the script loads
