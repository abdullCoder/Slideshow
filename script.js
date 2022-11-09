var slider_content = document.getElementById("box");

// contain image in an array

var image = ["a", "b", "c", "d", "e", "f"];

var i = image.length;

// function for next slide
function nextImage() {
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  slider_content.innerHTML = "<img src=" +image[i - 1] + ".jpg>";
}

// for prev

function prevImage() {
  if (i > image.concat.length + 1 && i > 1) {
    i = i -1;
}else{
    i = image.length
}
slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";

}
setInterval(nextImage, 6000)
