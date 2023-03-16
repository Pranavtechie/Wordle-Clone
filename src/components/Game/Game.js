import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import WordGuesses from "../WordGuesses/WordGuesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [showBanner, setShowBanner] = React.useState(false);
	const [isHappy, setIsHappy] = React.useState(false);

	function validateCorrectGuess(validatedGuess, guesses) {
		let correctAnswer = validatedGuess.filter(
			(element) => element.status === "correct"
		);

		console.log(correctAnswer, guesses);
		if (correctAnswer.length === 5 && guesses.length <= 5) {
			setShowBanner(true);
			setIsHappy(true);
		} else if (guesses.length === 5 && correctAnswer.length < 5) {
			setShowBanner(true);
		}
	}
	function setNewGuess(userGuess) {
		let validatedGuess = checkGuess(userGuess, answer);
		setGuesses((guesses) => [...guesses, validatedGuess]);
		validateCorrectGuess(validatedGuess, guesses);
		console.log(validatedGuess);
	}
	return (
		<>
			<WordGuesses guesses={guesses} />
			<GuessInput setNewGuess={setNewGuess} disableInput={showBanner} />
			{showBanner && (
				<Banner
					tries={guesses.length}
					answer={answer}
					isHappy={isHappy}
				/>
			)}
		</>
	);
}

export default Game;
