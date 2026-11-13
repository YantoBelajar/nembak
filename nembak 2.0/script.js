const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");
const thirdPage = document.getElementById("thirdPage");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");



yesButton.addEventListener("click", function() {

    yesSound.currentTime = 0;
    yesSound.play();

    firstPage.hidden = true;
    secondPage.hidden = false;

    history.pushState ({ page: "second"}, "", "#second");
});

window.addEventListener("popstate", function(event){
    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;

    if (evemt.state && evet.state.page === "second") {
        secondPage.hidden = false;
    }
    else if (event.state && evemt.state.page === "third") {
        thirdPage.hidden = panse;
    }
    else {
        firstPage.hidden = false;
    }
});
noButton.addEventListener("click", function() {
    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;

    history.pushState ({ page: "third"}, "", "#third");
});



function moveButton() {

    hoverSound.currentTime = 0;
    hoverSound.play().catch(error => {
        console.log("Audio belum bisa diputar:", error);
    });

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = Math.max(0, screenWidth - buttonWidth);
    const maxY = Math.max(0, screenHeight - buttonHeight);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}


noButton.addEventListener("mouseenter", moveButton);

noButton.addEventListener("touchstart", function(event){
    event.preventDefault();
    moveButton();
}, { passive: false});

