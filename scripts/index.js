alert(`Welcome to the ${document.title}!`);
const riddles = [
    {
        answer: "clock",
        hints: [
            "I have hands but cannot clap.",
            "I am often found on a wall or a wrist.",
            "I help people keep track of time.",
            "I have numbers but I'm not a phone.",
            "I have a face but I don't see.",
            "I make a ticking sound.",
            "People look at me many times a day.",
            "I have two hands but no fingers.",
            "I can be digital or analog.",
            "I am an essential tool for scheduling."
        ]
    },
    {
        answer: "river",
        hints: [
            "I run but never walk.",
            "I have a bed but never sleep.",
            "Fishes live inside me.",
            "I flow from high to low.",
            "I am part of the water cycle.",
            "People build bridges over me.",
            "I can be narrow or wide.",
            "I lead to lakes and oceans.",
            "I provide water for drinking and farming.",
            "Many cities are built near me."
        ]
    },
    {
        answer: "book"
        , hints: [
            "I have pages but I am not a newspaper.",
            "I can be fiction or non-fiction.",
            "I hold knowledge and stories.",
            "Libraries are full of me.",
            "I have words but I do not speak.",
            "I can be paperback or hardcover.",
            "Some people love collecting me.",
            "Authors create me.",
            "I am used in schools and universities.",
            "People enjoy me for entertainment and learning."
        ]
    },
    {
        answer: "candle"
        , hints: [
            "I am tall when I am young and short when I am old.",
            "I provide light but I am not a bulb.",
            "I melt as I burn.",
            "I am often used in celebrations.",
            "I can have different scents.",
            "I need fire to work.",
            "I am made of wax.",
            "People use me during power outages.",
            "I can be placed in a holder.",
            "I flicker when the wind blows."
        ]
    },
    {
        answer: "shadow"
        , hints: [
            "I follow you everywhere but disappear in the dark.",
            "I change shape depending on the light.",
            "I have no substance but you can see me.",
            "I grow longer in the morning and evening.",
            "I am black but not a color.",
            "I copy your movements.",
            "I disappear at night.",
            "I can be cast by anything that blocks light.",
            "Children sometimes fear me.",
            "I am the silhouette of an object."
        ]
    },
    {
        answer: "key"
        , hints: [
            "I open locks but I am not a thief.",
            "I am small but very important.",
            "I can be found on a keyboard.",
            "I have different shapes and sizes.",
            "Without me, some doors stay closed.",
            "I am made of metal.",
            "Some people wear me around their neck.",
            "I am used to start cars.",
            "I can be lost easily.",
            "I am often kept on a ring."
        ]
    },
    {
        answer: "needle"
        , hints: [
            "I have an eye but cannot see.",
            "I am used for sewing.",
            "I am sharp and thin.",
            "I have a point but I don’t make arguments.",
            "Thread goes through me.",
            "I can be found in a haystack.",
            "I am made of metal.",
            "Doctors use a version of me.",
            "I can be used in embroidery.",
            "I am very small but useful."
        ]
    },
    {
        answer: "mirror"
        , hints: [
            "I reflect but do not absorb.",
            "I help you see yourself.",
            "I am found in bathrooms and cars.",
            "I can break easily.",
            "People check me before going out.",
            "I am made of glass.",
            "I can make a room look bigger.",
            "I show the truth, but reversed.",
            "Snow White had trouble because of me.",
            "Some believe I bring bad luck if broken."
        ]
    },
    {
        answer: "comb"
        , hints: [
            "I have teeth but cannot bite.",
            "I help keep hair neat.",
            "Barbers use me often.",
            "I am made of plastic or wood.",
            "I come in different sizes.",
            "People carry me in their pockets.",
            "I work best on dry hair.",
            "I can have fine or wide teeth.",
            "I help remove tangles.",
            "I am used in hairstyling."
        ]
    },
    {
        answer: "stamp"
        , hints: [
            "I travel around the world while staying in one place.",
            "I am stuck to envelopes.",
            "I am small but important.",
            "I am collected by hobbyists.",
            "I have a value printed on me.",
            "I help deliver mail.",
            "I come in many designs.",
            "People lick me to use me.",
            "I represent different countries.",
            "Without me, letters wouldn’t be sent."
        ]
    }
]
let ulHints = document.getElementById("ulHints");

// while (anotherGo) {
//     ulHints.innerHTML = `<h3>Hints so far</h3>`; //reset the hints
//     riddle = riddles[Math.floor(Math.random() * riddles.length)];
//     let answer = "";
//     let hintNumber = 0;
//     while (answer.toLocaleLowerCase() != riddle.answer.toLocaleLowerCase()   && hintNumber < riddle.hints.length) {
//         let newLiHint = document.createElement("li");
//         newLiHint.textContent = riddle.hints[hintNumber];
//         ulHints.appendChild(newLiHint);
//         answer = prompt(`${riddle.hints[hintNumber]}\nWhat am I?`);
//         hintNumber++;
//     }

//     if (answer.toLocaleLowerCase() == riddle.answer.toLocaleLowerCase()) {
//         alert("Congratulations! You guested right!");
//     }
//     if (hintNumber == riddle.hints.length) {
//         alert(`You run out of hints. Sorry. The answer is ${riddle.answer}.`);
//     }
//     anotherGo = confirm("Do you wnat another riddle?")
// }

startNewGame();

function startNewGame() {    
    ulHints.innerHTML = `<h3>Hints so far</h3>`; //reset the hints
    let riddle = riddles[Math.floor(Math.random() * riddles.length)];
    let hintNumber = 0;
    askQuestion(riddle, hintNumber);
}

function askQuestion(riddle,hintNumber) {
    let newLiHint = document.createElement("li");
    newLiHint.textContent = riddle.hints[hintNumber];
    ulHints.appendChild(newLiHint);
    setTimeout(() => {
        let answer = prompt(`${riddle.hints[hintNumber]}\nWhat am I?`);
        if (answer.toLocaleLowerCase() == riddle.answer.toLocaleLowerCase()) {
            alert("Congratulations! You guested right!");
            const anotherGo = confirm("Do you wnat another riddle?");
            if (anotherGo) {
                startNewGame();
            }else {
                alert("Thank you for playing!");
            }
            return;
        } else if (hintNumber == riddle.hints.length) {
            alert(`You run out of hints. Sorry. The answer is ${riddle.answer}.`);
            return;
        } else {
            askQuestion(riddle,++hintNumber);
        }        
    }, 200);

}

