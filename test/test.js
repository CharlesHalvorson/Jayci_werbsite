var box = document.getElementById("box");
var position = 0;

setInterval(function() {
    // 0 = Top Left, 1 = Top Center, 2 = Top Right
    // 3 = Middle Right, 4 = Bottom Right, 5 = Bottom Center
    // 6 = Bottom Left, 7 = Middle Left

    if (position == 0) {
        box.style.justifySelf = "left";
        box.style.alignSelf = "start";
    } else if (position == 1) {
        box.style.justifySelf = "center";
        box.style.alignSelf = "start";
    } else if (position == 2) {
        box.style.justifySelf = "right";
        box.style.alignSelf = "start";
    } else if (position == 3) {
        box.style.justifySelf = "right";
        box.style.alignSelf = "center";
    } else if (position == 4) {
        box.style.justifySelf = "right";
        box.style.alignSelf = "end";
    } else if (position == 5) {
        box.style.justifySelf = "center";
        box.style.alignSelf = "end";
    } else if (position == 6) {
        box.style.justifySelf = "left";
        box.style.alignSelf = "end";
    } else if (position == 7) {
        box.style.justifySelf = "left";
        box.style.alignSelf = "center";
    }

    // Move to the next position, reset to 0 after 7
    position = (position + 1) % 8;
}, 500);