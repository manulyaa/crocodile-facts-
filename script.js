const crocodileFacts = [
    { fact: "Crocodiles are reptiles and belong to the order Crocodylia." },
    { fact: "They are found in tropical and subtropical regions around the world." },
    { fact: "Crocodiles can live for over 70 years in the wild." },
    { fact: "They are carnivorous and primarily eat fish, birds, and mammals." },
    { fact: "Crocodiles have powerful jaws that can exert tremendous pressure." },
    { fact: "They are excellent swimmers and can hold their breath underwater for over an hour." },
    { fact: "Crocodiles are ectothermic, meaning their body temperature is regulated by their environment." },
    { fact: "They have a unique ability to see in the dark due to a reflective layer behind their retinas." },
    { fact: "Crocodiles communicate through a variety of vocalizations, including growls and hisses." },
    { fact: "Some species of crocodiles can reach lengths of over 20 feet (6 meters)." }
];

const factElement = document.getElementById('fact');
const nextFactButton = document.getElementById('nextFactButton');

let moveCount = 0;

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
    factElement.innerHTML = `<span class="bold">${crocodileFacts[randomIndex].fact}</span>`;
}

function moveButton() {
    if (moveCount < 3) {
        const randomX = Math.floor(Math.random() * 200) - 100; // Random X offset
        const randomY = Math.floor(Math.random() * 200) - 100; // Random Y offset
        nextFactButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
        moveCount++;
    } else {
        nextFactButton.style.pointerEvents = 'auto'; // Allow clicking after moving
        nextFactButton.innerText = "Click for Next Fact";
    }
}

nextFactButton.addEventListener('click', () => {
    if (moveCount < 3) {
        moveButton();
    } else {
        displayRandomFact();
        moveCount = 0; // Reset move count after displaying a fact
        nextFactButton.style.pointerEvents = 'none'; // Disable clicking until moved again
        nextFactButton.innerText = "Moving...";
    }
});

// Initial fact display
displayRandomFact();
