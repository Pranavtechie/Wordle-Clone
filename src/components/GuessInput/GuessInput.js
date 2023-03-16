import React from "react";

function GuessInput({ setNewGuess, disableInput }) {
	const [input, setInput] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ input });
		setNewGuess(input);
		setInput("");
	}
	return (
		<>
			<form
				className="guess-input-wrapper"
				onSubmit={(e) => handleSubmit(e)}
			>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					id="guess-input"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value.toUpperCase())}
					required
					minLength={5}
					maxLength={5}
					disabled={disableInput}
					pattern="[a-zA-Z]{5}"
				/>
			</form>
		</>
	);
}

export default GuessInput;
