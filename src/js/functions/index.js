
function scrollToRight(categoryId) {
    const container = document.getElementById(categoryId);
    container.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });

}

function scrollToLeft(categoryId) {
    const container = document.getElementById(categoryId);
    container.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
}