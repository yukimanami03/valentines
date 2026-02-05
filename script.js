const letter = document.getElementById("letter");
const card = document.getElementById("card");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const thankYou = document.getElementById("thankYou");

// Open letter
letter.addEventListener("click", () => {
    letter.style.display = "none";
    card.classList.remove("hidden");
});

// No button runs away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes button
yesBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    thankYou.classList.remove("hidden");
});
