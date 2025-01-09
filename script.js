let x = 0;
var y = 0;
function click_to_move() {
    // console.log("helllo");
    let ela = document.getElementById("my_id");
    if (x <= 500 && y == 0) {
        x += 110;
        ela.style.left = x + "px";
        console.log("mid");
    } else if (x >= 500 && y <= 300) {
        y += 60;
        ela.style.top = y + "px";
        console.log("middd");
    } else if (y >= 300 && x >= 0) {
        x -= 70;
        ela.style.left = x + "px";
        console.log("last");
    } else if (x <= 0 && y >= 0) {
        y -= 60;
        ela.style.top = y + "px";
        console.log("hhhhhh");
    }
}
