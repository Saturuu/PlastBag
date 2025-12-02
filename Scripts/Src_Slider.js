

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


document.addEventListener('DOMContentLoaded', () => {

    const scroll = document.querySelectorAll('.ItemScrollSelection');
    const Left_Button = Array.from(document.querySelectorAll('.Left_Slider_Button'));
    const Right_Button = Array.from(document.querySelectorAll('.Right_Slider_Button'));
    
    console.log(Array.from(scroll));
    console.log(Left_Button);
    console.log(Right_Button);

    Array.from(scroll).forEach(scroll => {

        const maxScroll = scroll.scrollWidth - scroll.clientWidth;
        const tolerance = 1;

        scroll.addEventListener('scroll', () => {
            //If reach the start or end of item scrollbar
            //Then hide button or show
            if (Math.abs(scroll.scrollLeft - maxScroll) < tolerance) {
                //Right
                console.log("RR " + scroll.id);
                Right_Button.find(Right_Button => Right_Button.id === scroll.id).style.display = 'none';
                Left_Button.find(Left_Button => Left_Button.id === scroll.id).style.display = 'block';
            } else if (Math.abs(scroll.scrollLeft) < tolerance) {
                //Left
                console.log("LL " + scroll.id);
                Right_Button.find(Right_Button => Right_Button.id === scroll.id).style.display = 'block';
                Left_Button.find(Left_Button => Left_Button.id === scroll.id).style.display = 'none';
            } else {
                //Center
                Right_Button.find(Right_Button => Right_Button.id === scroll.id).style.display = 'block';
                Left_Button.find(Left_Button => Left_Button.id === scroll.id).style.display = 'block'; 
            }
        });
    });

});
