let text = "Call me Ishmael. Some years ago- never mind how long precisely- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."
let typedText = "";
let cursorBlink = false;
window.onload = function () {
    render();
    this.document.addEventListener("keydown", function (e) {
        if (e.key.length === 1) {//if the key pressed is a single character
            //write to the text
            typedText += e.key;


        } else if (e.key === "Backspace") {
            typedText = typedText.slice(0, -1);//remove the last letter
        }
        console.log(typedText);
        render();
    });
}
function render() {
    const textDiv = document.querySelector("#text");
    textDiv.innerHTML = "";
    // typed.classList.add = "typed";
    // error.classList.add = "error";
    // untyped.classList.add = "untyped";

    for (let i = 0; i < text.length; i++) {
        const element = document.createElement("span");
        if (i === typedText.length) {
            element.classList.add("cursor");
            if (cursorBlink) {
                element.classList.add("cursor-blink");
            }
        }
        if (typedText[i] === text[i]) {
            element.textContent = text[i];
            element.classList.add("typed");
        } else if (typedText[i]) {
            element.textContent = typedText[i];//must be typedText to show the incorrect text
            element.classList.add("error");
        } else {
            element.textContent = text[i];
            element.classList.add("untyped");
        }
        textDiv.appendChild(element);
    }
    //console.log(typed.innerHTML);
}
setInterval(function () {
    cursorBlink = !cursorBlink;
    if (cursorBlink) {
        document.querySelector(".cursor").classList.add("cursor-blink");
    } else {
        document.querySelector(".cursor").classList.remove("cursor-blink");
    }
}, 250);