

let current_item_img
let all_item_imgs


document.addEventListener('DOMContentLoaded', () => {

    current_item_img = document.querySelector(".CurrentImage")
    all_item_imgs = document.querySelectorAll(".ThumbnailImage")
    console.log(current_item_img);
    console.log(all_item_imgs);
});

function ToggleCurrentImage(img) {
    if (img === current_item_img.getAttribute("src")){
    } else {
        current_item_img.setAttribute("src", img);
    };
};