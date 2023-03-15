import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function WordGuesses({ guesses }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((number) => {
				return <Guess key={number} value={guesses[number]} />;
			})}
		</div>
	);
}

export default WordGuesses;
