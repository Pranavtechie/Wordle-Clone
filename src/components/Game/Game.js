import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import WordGuesses from "../WordGuesses/WordGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function setNewGuess(userGuess) {
		setGuesses((guesses) => [...guesses, userGuess]);
	}
	return (
		<>
			<WordGuesses guesses={guesses} />
			<GuessInput setNewGuess={setNewGuess} />
		</>
	);
}

export default Game;
