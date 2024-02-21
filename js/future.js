











function setScaleBasedOnScreenWidth() {

	  // Calculate the scale ratio
	  var screenWidth = window.innerWidth;
	  var originalWidth = 1920; // The original width of your div
	  var scaleRatio = screenWidth / originalWidth;

	  scaleRatio -= 0.1;
	  if (scaleRatio < 0.23) {
	  	scaleRatio = 0.23;
	  }
	  if (scaleRatio > 0.75) {
	  	scaleRatio = 0.75;
	  }

	  var calcWidth = 1920 * scaleRatio;
	  var margin = (screenWidth - calcWidth)/2;
	  margin = margin - margin*0.1;

	  var calcHeight = 1080 * scaleRatio;
	  var marginBottom = (1080 - calcHeight);
	  var setBottom = Math.abs(marginBottom) * -1;
	  console.log("Here is the scale ratio " + scaleRatio);
	  console.log("Here is the margin ratio " + margin);
    $(".O7ADyQ").each( function(e) {
  		this.style.transform = 'scale(' + scaleRatio + ')';
		if (margin > 0) {
		  	this.style.left = margin + 'px';
		}
		//this.style.bottom = setBottom + 'px';
		this.style.height = calcHeight + 'px';
    });
}

// Call the function on window resize and on initial load
window.addEventListener('resize', setScaleBasedOnScreenWidth);
setScaleBasedOnScreenWidth(); // Also call it when the script loads
