import React from "react";

function Banner({ tries, isHappy, answer }) {
	return (
		<>
			{isHappy ? (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>{tries} guesses</strong>.
					</p>
				</div>
			) : (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			)}
		</>
	);
}

export default Banner;
