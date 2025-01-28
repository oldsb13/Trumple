const words = [
    "TRUMP", "BRASH", "LOUD", "BOLD", "POLAR", "GREED", "BLUST", "EGOIC", "FIERY", "WRATH",
    "BOAST", "GLARE", "STORM", "CHAOS", "BLAME", "REBEL", "BRUTE", "HASTY", "CRASS", "BLUFF",
    "BRAGG", "SWIPE", "SNARK", "SLYER", "PROUD", "ANGRY", "FUMED", "RILED", "SPITE", "TOXIC",
    "VENOM", "SHARP", "HARSH", "ROUGH", "TOUGH", "BRUSK", "GRUFF", "BLUNT", "SASSY", "SNIDE",
    "SNEER", "SMIRK", "COCKY", "ARROG", "HAUGHTY", "BOSSY", "PUSHY", "NOSY", "FLASH", "GLITZ",
    "LUSTY", "WANTS", "CRAVE", "YEARN", "COVET", "GRASP", "CLING", "HOARD", "AMASS", "STACK",
    "PILE", "HEAP", "LOAD", "BULK", "MASS", "SIZE", "LARGE", "BIGLY", "HUGE", "VAST", "WIDE",
    "BROAD", "GRAND", "GREAT", "MAJOR", "ULTRA", "MEGA", "SUPER", "HYPER", "OVER", "TOP",
    "PEAK", "APEX", "CREST", "CROWN", "THRONE", "REIGN", "RULE", "POWER", "FORCE", "MIGHT",
    "STRONG", "FIRM", "SOLID", "STEAD", "STOUT", "STIFF"
];

const secretWord = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;

document.getElementById("submit-guess").addEventListener("click", function () {
    const guess = document.getElementById("guess-input").value.toUpperCase();
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word!");
        return;
    }

    const row = document.getElementById(`row-${currentRow}`);
    for (let i = 0; i < 5; i++) {
        const cell = row.children[i];
        cell.textContent = guess[i];
        if (guess[i] === secretWord[i]) {
            cell.style.backgroundColor = "green"; // Correct letter and position
        } else if (secretWord.includes(guess[i])) {
            cell.style.backgroundColor = "yellow"; // Correct letter, wrong position
        } else {
            cell.style.backgroundColor = "gray"; // Letter not in the word
        }
    }

    currentRow++;
    if (guess === secretWord) {
        alert("Congratulations! You guessed the word!");
    } else if (currentRow === 6) {
        alert(`Game over! The word was ${secretWord}.`);
    }
});
