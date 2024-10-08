let score = 0;

if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", 0);
}
score = parseInt(localStorage.getItem("score"));
document.getElementById("scoreboard").innerHTML = `<p>SCORE : ${score}</p>`;


document.getElementById("boudin").addEventListener("click", () => {

    score = score + 11560;

    let boudinImage = document.getElementById("bdx");
    let currentWidth = boudinImage.clientWidth;
    let currentHeight = boudinImage.clientHeight;
    boudinImage.style.width = (currentWidth + 60) + "px";
    boudinImage.style.height = (currentHeight + 60) + "px";

    document.getElementById("scoreboard").innerHTML = `<p>SCORE : ${score}</p>`;
    localStorage.setItem("score", score);
})


document.getElementById("suppr").addEventListener("click", () => {
    localStorage.clear();
    score = 0;
    document.getElementById("scoreboard").innerHTML = `<p>SCORE : ${score}</p>`;
})