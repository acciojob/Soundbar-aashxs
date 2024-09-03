let audios = Array.from(document.querySelectorAll("audio"));
let btns = Array.from(document.querySelectorAll(".btn"));
let stopp = document.getElementsByClassName("stop")[0];

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        audios.forEach((aud, audIndex) => {
            if(index === audIndex) {
                aud.play();
            } else {
                aud.pause();
                aud.currentTime = 0;
            }
        });
    });
});

stopp.addEventListener("click", () => {
    audios.forEach(aud => {
        aud.pause();
        aud.currentTime = 0;
    });
});