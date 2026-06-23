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