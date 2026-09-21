function showMessage() {
    alert("Привет, дорогуша!");
}
console.log("Это сообщение в консоли!");

const button = document.getElementById("hui");

button.addEventListener("click", function () {

    const pizda = document.getElementById("pizda");
    pizda.textContent = "у тебя пизда воняе";
});

const listImages = [
    {
        srs: "/images-video-audio/5IPd.gif",
    nameImg: "something"
    }
    {
        srs: "/images-video-audio/77fA.gif",
        nameImg: "something2",
    }
]
    
const img = document.getElementById("kurwa");

function setImg(currentDataImg) {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);



