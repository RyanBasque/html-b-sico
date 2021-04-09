let themeIsWhite = true;

function trocaTema() {
    const body = document.getElementById("body");
    const h1 = document.getElementById("h1");
    const p = document.getElementById("p");
    const bold1 = document.getElementById("bold1");
    const bold2 = document.getElementById("bold2");

    if (themeIsWhite) {
        body.style.backgroundColor = "#3F3D56";
        h1.style.color = "#B4B4F4"
        p.style.color = "#FFF"
        bold1.style.color = "#B4B4F4"
        bold2.style.color = "#B4B4F4"
    } else {
        body.style.backgroundColor = "#FFF";
        h1.style.color = "#B4B4F4"
        p.style.color = "#000000"
        bold1.style.color = "##B4B4F4"
        bold2.style.color = "##B4B4F4"
    }

    themeIsWhite = !themeIsWhite;

}

document.addEventListener("DOMContentLoaded", () => {
    let timeline = new TimelineMax;

    timeline.fromTo('#body', 1,
        // from:
        { width: '100%' },
        // to:
        { width: '0%', ease: Expo.easeInOut, delay: 2 }
    );
})