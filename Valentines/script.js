const roseAreas = document.querySelectorAll(".rose-area");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cardModal = document.getElementById("cardModal");
const cardImage = document.getElementById("cardImage");
const closeModal = document.getElementById("closeModal");
const bgMusic = document.getElementById("bgMusic");

/* Try autoplay */
window.addEventListener("load", () => {
    bgMusic.play().catch(() => {
        document.body.addEventListener("click", () => {
            bgMusic.play();
        }, { once: true });
    });
});

/* Rose click */
roseAreas.forEach(area => {
    area.addEventListener("click", () => {

        const type = area.getAttribute("data-type");

        if (type === "card1") {
            openCard("cotie.png");
        }

        if (type === "card2") {
            openCard("pretty.png");
        }

        if (type === "special") {
            typeWriter("Will ya go out with me and be w me forever? ❤️🌹");
            buttons.style.display = "block";
            confettiExplosion();
        }
    });
});

function openCard(src) {
    cardImage.src = src;
    cardModal.style.display = "flex";
}

/* Close modal */
closeModal.addEventListener("click", () => {
    cardModal.style.display = "none";
});

/* YES */
yesBtn.addEventListener("click", () => {
    typeWriter("YAYYY 💖 See you on our date!!!");
    confettiExplosion();
});

/* NO runs away */
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

/* Petals */
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.textContent = "🌸";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 7000);
}

setInterval(createPetal, 400);

/* Typing */
function typeWriter(text) {
    message.innerHTML = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            message.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }
    typing();
}

/* Confetti */
function confettiExplosion() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor =
            `hsl(${Math.random() * 360},100%,50%)`;
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.animation = "fall 3s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
