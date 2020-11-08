// Game that has a range of numbers. Lowest to highest or smallest to biggest.
// Randomizer function given that range.
// Create space for collecting the number of guesses.

//Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly.

// If the player has an incorrect guess, display an alert message that informs the player:

// Whether their guess is too high, or too low, and...
// A list of all the previously guessed numbers (without showing the square brackets of an array).
// If the player has guessed the secret number:

// Display an alert message that congrats the player and informs them of how many guesses they took.
// End the gameplay.

// const game = {
//     title: 'Guess the number',
//     biggestNum: 10,
//     smallestNum: 1,
//     prevGuesses: [],
//     currentGuess: null,
//     getGuess: function () {
//         this.currentGuess = prompt(`Enter a guess between ${this.game.smallestNum} and ${this.game.biggestNum}:`);
//     },
//     get getGuess() {
//         return this.getGuess;
//     },
//     set getGuess(value) {
//         this.getGuess = value;
//     },
//     secretNum: null,
//     play: function(){
//         this.secretNum = Math.floor(Math.random() *
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

//         return this.secretNum; //function here that randomizes my range
//     }
// };

// // while (currentGuess != secretNum) {
// //         alert.game.getGuess;
// //         this.prevGuesses.push(this.currentGuess);
// //     }


// console.log(game.getGuess());
// console.log(game.play());

// const game = {
//     title: 'Guess the number',
//     biggestNum: 100,
//     smallestNum: 1,
//     prevGuesses: [],
//     currentGuess: null,
//     secretNum: null,
//     getGuess: function () {
//         this.currentGuess = prompt(`Enter a guess between ${this.game.smallestNum} and ${this.game.biggestNum}:`);
//         let number = parseInt(this.currentGuess);
//         while (this.currentGuess !== isNaN(number) && this.currentGuess >= smallestNum && this.currentGuess <= biggestNum){
//             prompt(`Enter a natural number between ${this.game.smallestNum} and ${this.game.biggestNum}`);

//             if (this.currentGuess > this.secretNum){
//                 alert(`Your number is too high`);
//                 this.prevGuesses.push(this.currentGuess);
//             } else if (this.currentGuess < this.secretNum) {
//                 alert(`Your number is too low`);
//                 this.prevGuesses.push(this.currentGuess);
//             } else if (this.currentGuess == this.secretNum) {
//                 alert(`Congratulations! You guessed the number! in ${this.prevGuesses.length} attempts!
//                 Your guesses where ${this.prevGuesses.join}`);
//             } else
//                 alert(`This is not a number.`);
//         }
//     },
//     play: function() {
//         this.secretNum = Math.floor(Math.random() *
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
//         console.log(this.secretNum);
//         this.getGuess();
//     },


// }
// game.play();
// const name = prompt('Enter your name: ');
// const age = prompt('Enter your age: ');
// const person = {name, age};

//  NOTE TO INSTRUCTOR
// I could not make the object work at all. Kept saying that smallestNum and prompt, etc were not defined and I just couldn't find a way around it. Therefore I wrote the game as a function, which works decently. Below I tried to write this same function as an object, and it kept giving me the same errors.

function guessTheNumberGame() {
    let smallestNum = 1;
    let biggestNum = 10;
    let playerGuess = parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`));
    let attempts = [];
    let secretNum = Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum;
    while (playerGuess !== secretNum && playerGuess >= smallestNum && playerGuess <= biggestNum) {
        playerGuess = parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`))

        if (playerGuess > secretNum) {
            alert(`This number is too high. Please try entering a lower number.`);
            attempts.push(playerGuess);
        }
        else if (playerGuess < secretNum) {
            alert(`This number is too low. Please try entering a higher number.`);
            attempts.push(playerGuess);
        }
        else if (playerGuess == secretNum) {
            attempts.push(playerGuess);
            alert(`CONGRATULATIONS! You guessed the right number in ${attempts.length} attempts, which were ${attempts.join()}`);
        }
        else if (isNaN(playerGuess)) {
            alert(`This is not a number. Please enter a natural number between ${smallestNum} and ${biggestNum}`);
        }
        else alert(`Your number is out of the stablished range. Please enter a number between ${smallestNum} and ${biggestNum}`);
    };
};

guessTheNumberGame();

// const guessTheNumberGame = {
//     smallestNum 1,
//     biggestNum: 100,
//     playerGuess: parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`)),
//     attempts: [],
//     secretNum: Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum,

//     play: function() {
//         while (playerGuess !== secretNum && playerGuess >= smallestNum && playerGuess <= biggestNum) {
//             this.playerGuess
//         if (playerGuess > secretNum) {
//             alert(`This number is too high. Please try entering a lower number.`);
//             attempts.push(playerGuess);
//         }
//         else if (playerGuess < secretNum) {
//             alert(`This number is too low. Please try entering a higher number.`);
//             attempts.push(playerGuess);
//         }
//         else if (playerGuess == secretNum) {
//             attempts.push(playerGuess);
//             alert(`CONGRATULATIONS! You guessed the right number in ${attempts.length} attempts, which were ${attempts.join}`);
//         }
//         else if (isNaN(playerGuess)) {
//             alert(`This is not a number. Please enter a natural number between ${smallestNum} and ${biggestNum}`);
//         }
//         else alert(`Your number is out of the stablished range. Please enter a number between ${smallestNum} and ${biggestNum}`);
//     };
// },
// }
