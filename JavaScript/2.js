let duck = false
function tog(){
    console.log(duck)
    if (duck==false) {
        document.getElementById("header-bottom-nav").style.display="block";
        duck = true;
        console.log("false to true")
        console.log(duck)
    } else {
        document.getElementById("header-bottom-nav").style.display ="none";
        duck = false;
        console.log("true to false")
        
    }
}
function togg(duck){
    console.log(duck);
}

function toggleRaptorImages() {
    var images = document.getElementById("raptor-images");
    if (images.style.display === "none") {
        images.style.display = "block";
    } else {
        images.style.display = "none";
    }
}

function toggleGarbageImage() {
    var image = document.getElementById("garbage-image");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

function toggleNewImages() {
    var images = document.getElementById("new-images");
    if (images.style.display === "none") {
        images.style.display = "block";
    } else {
        images.style.display = "none";
    }
}

const mamButton = document.getElementById('Mam');
const mamvid = document.getElementById('mamvid');

mamButton.addEventListener('click', function() {
    if (mamvid.style.display === 'block') {
        mamvid.style.display = 'none';
    } else {
        mamvid.style.display = 'block';
    }
});