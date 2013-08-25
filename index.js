 function showLightbox(x) {
	// with jQuery
	$('#bigimage').src(x);



	//find the place for the image to show
	bigimage = document.getElementById("bigimage");
	//show the path
	bigimage.src = x;


	display in the bigimage = img src of href
	1. associate image (general or specific) with bigimage "image"
	2. show the image in bigimage

	bigimage(img src);
	//show the image big
	//if another image is click or the same image, the subsequent big image should be the one just clicked
}





1. connect showLightbox with HTML
2. define what showLightbox does