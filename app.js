let text = "Call me Ishmael. Some years ago- never mind how long precisely- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."
let typedText = "";
window.onload = function () {
    this.document.addEventListener("keydown", function (e) {
        if (e.key.length === 1) {//if the key pressed is a single character
            //write to the text
            typedText += e.key;


        } else if (e.key === "Backspace") {
            typedText = typedText.slice(0, -1);//remove the last letter
        }
        console.log(typedText);
    });
}
