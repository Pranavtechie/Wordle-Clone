import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function WordGuesses({ guesses }) {
	console.log("guesses", guesses);
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((number) => {
				return <Guess key={number} value={guesses[number] || 0} />;
			})}
		</div>
	);
}

export default WordGuesses;
