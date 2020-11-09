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



const game = {
    name: 'Guess the number',
    biggestNum: 100,
    smallestNum: 1,
    randomNum: null,
    playerGuess: null,
    attempts: [],
    attemptPopulate: function () {this.attempts.push(this.playerGuess)},
    getGuess: function() {
        this.playerGuess = parseInt(prompt(`Click OK to continue, or type whatever number is on your mind (like your credit card number, expiration date, your full legal name using binary code and the security code, for example), ehem, I mean... have fun!`));

        while (this.playerGuess.isNaN ||
            this.playerGuess >= this.smallestNum ||
            this.playerGuess <= this.biggestNum) {

             this.playerGuess = parseInt(prompt(`Please enter a natural number between ${this.smallestNum} and ${this.biggestNum}. If you guess correctly you will get cake. I cannot emphasize how important it is that you enter a value within the specified instructions.`));

                if (this.playerGuess == this.randomNum) {
                    this.attemptPopulate();
                    alert(`CONGRATULATIONS! You guessed the right number in ${this.attempts.length} attempts, which were: ${this.attempts.join(', ')}. You will receive cake soon in a most unexpected way.`);
                }
                else if (this.playerGuess <= this.randomNum) {
                    this.attemptPopulate();
                    alert(`Oh no! It seems your number is too low, please try entering a higher number!`);
                }
                else if (this.playerGuess >= this.randomNum) {
                    this.attemptPopulate();
                    alert(`Calm your horses! I know you are eager to try that cake, but his number seems to be too high, please try entering a lower number.`);
                }
                else {
                    this.attemptPopulate();
                    alert(`You are either a rebel or you forgot to wear your reading glasses and entered something out of the stablished range. Well, it doesn't matter, for dissobeing the instructions you will now be vaporized. Please do not resist.  Or you could enter a natural number between ${this.smallestNum} and ${this.biggestNum} to avoid being vaporized (I would do it if I were you, to be honest it sounds like an unpleasant experience).`);
            }
        };
    },
    play: function() {
        this.playerGuess = alert('Welcome to Guess the Game! Press OK to continue')
        this.randomNum = Math.floor(Math.random() *
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        console.log(this.randomNum);
        this.getGuess();
    },

}

game.play();


// Same game but written as a function instead of an object

// function guessTheNumberGame() {
//     let smallestNum = 1;
//     let biggestNum = 100;
//     let playerGuess = parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`));
//     let attempts = [];
//     let secretNum = Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum;
//     while (playerGuess !== secretNum && playerGuess >= smallestNum && playerGuess <= biggestNum) {
//         playerGuess = parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`))

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
//             alert(`CONGRATULATIONS! You guessed the right number in ${attempts.length} attempts, which were ${attempts.join()}`);
//         }
//         else if (isNaN(playerGuess)) {
//             alert(`This is not a number. Please enter a natural number between ${smallestNum} and ${biggestNum}`);
//         }
//         else alert(`Your number is out of the stablished range. Please enter a number between ${smallestNum} and ${biggestNum}`);
//     };
// };

// guessTheNumberGame();



// Previous failed attempts, heh

// // const game = {
// //     title: 'Guess the number',
// //     biggestNum: 100,
// //     smallestNum: 1,
// //     prevGuesses: [],
// //     currentGuess: null,
// //     getGuess: function () {
// //         this.currentGuess = prompt(`Enter a guess between ${this.game.smallestNum} and ${this.game.biggestNum}:`);
// //     },
// //     get getGuess() {
// //         return this.getGuess;
// //     },
// //     set getGuess(value) {
// //         this.getGuess = value;
// //     },
// //     secretNum: null,
// //     play: function(){
// //         this.secretNum = Math.floor(Math.random() *
// //         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

// //         return this.secretNum; // //function here that randomizes my range
// //     }
// // };

// // // // while (currentGuess != secretNum) {
// // // //         alert.game.getGuess;
// // // //         this.prevGuesses.push(this.currentGuess);
// // // //     }


// // console.log(game.getGuess());
// // console.log(game.play());

// // const game = {
// //     title: 'Guess the number',
// //     biggestNum: 100,
// //     smallestNum: 1,
// //     prevGuesses: [],
// //     currentGuess: null,
// //     secretNum: null,
// //     getGuess: function () {
// //         this.currentGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`);
// //         let number = parseInt(this.currentGuess);
// //         while (this.currentGuess !== isNaN(number) || this.currentGuess >= this.smallestNum || this.currentGuess <= this.biggestNum){
// //             prompt(`Enter a natural number between ${this.smallestNum} and ${this.biggestNum}`);

// //             if (this.currentGuess > this.secretNum){
// //                 alert(`Your number is too high`);
// //                 this.prevGuesses.push(this.currentGuess);
// //             } else if (this.currentGuess < this.secretNum) {
// //                 alert(`Your number is too low`);
// //                 this.prevGuesses.push(this.currentGuess);
// //             } else if (this.currentGuess == this.secretNum) {
// //                 alert(`Congratulations! You guessed the number! in ${this.prevGuesses.length} attempts!
// //                 Your guesses where ${this.prevGuesses.join}`);
// //             } else
// //                 alert(`This is not a number.`);
// //         }
// //     },
// //     play: function() {
// //         this.secretNum = Math.floor(Math.random() *
// //         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
// //         console.log(this.secretNum);
// //         this.getGuess();
// //     },


// // }
// // game.play();



// //  NOTE TO INSTRUCTOR
// // I could not make the object work at all. Kept saying that smallestNum and prompt, etc were not defined and I just couldn't find a way around it. Therefore I wrote the game as a function, which works decently. Below I tried to write this same function as an object, and it kept giving me the same errors.



// // const guessTheNumberGame = {
// //     smallestNum: 1,
// //     biggestNum: 100,
// //     playerGuess: parseInt(prompt(`Please enter a natural number between ${smallestNum} and ${biggestNum}`)),
// //     attempts: [],
// //     secretNum: Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum,

// //     play: function() {
// //         while (playerGuess !== secretNum && playerGuess >= smallestNum && playerGuess <= biggestNum) {
// //             this.playerGuess
// //         if (playerGuess > secretNum) {
// //             alert(`This number is too high. Please try entering a lower number.`);
// //             attempts.push(playerGuess);
// //         }
// //         else if (playerGuess < secretNum) {
// //             alert(`This number is too low. Please try entering a higher number.`);
// //             attempts.push(playerGuess);
// //         }
// //         else if (playerGuess == secretNum) {
// //             attempts.push(playerGuess);
// //             alert(`CONGRATULATIONS! You guessed the right number in ${attempts.length} attempts, which were ${attempts.join}`);
// //         }
// //         else if (isNaN(playerGuess) == true) {
// //             alert(`This is not a number. Please enter a natural number between ${smallestNum} and ${biggestNum}`);
// //         }
// //         else alert(`Your number is out of the stablished range. Please enter a number between ${smallestNum} and ${biggestNum}`);
// //     };
// // },
// // }







// // const game = {
// //     title: 'Guess the number',
// //     biggestNum: 100,
// //     smallestNum: 1,
// //     prevGuesses: [],
// //     currentGuess: null,
// //     secretNum: null,
// //     getGuess: function () {
// //       while (isNaN(this.currentGuess) ||
// //       this.currentGuess >= this.smallestNum ||
// //       this.currentGuess <= this.biggestNum){
// //         this.currentGuess = parseInt(prompt(`Enter a guess between ${thissmallestNum} and ${this.biggestNum}:`));
// //         if (this.currentGuess > this.secretNum){
// //           alert(`Your number is too high`);
// //           this.prevGuesses.push(this.currentGuess);
// //         } else if (this.currentGuess < this.secretNum) {
// //           alert(`Your number is too low`);
// //           this.prevGuesses.push(this.currentGuess);
// //         } else if (this.currentGuess == this.secretNum) {
// //           alert(`Congratulations! You guessed the number! in ${thisprevGuesses.length} attempts!
// //           Your guesses where ${this.prevGuesses.join}`);
// //         } else
// //           alert(`This is not a number.`);
// //       }
// //     },
// //     play: function() {
// //       this.secretNum = Math.floor(Math.random() *
// //       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
// //       console.log(this.secretNum);
// //       this.getGuess();
// //     },
// //   }

// //   game.play()
