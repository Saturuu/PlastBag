
// Scrolling Functions:

// press left button to scroll to right:
function scroll_left(ID) {
    var ListToMove = document.getElementById(ID);
    ListToMove.scrollBy(document.getElementById(ID).clientWidth, 0);
}
// press right button to scroll to letf:
function scroll_right(ID) {
    var ListToMove = document.getElementById(ID);
    ListToMove.scrollBy(-document.getElementById(ID).clientWidth, 0);
}