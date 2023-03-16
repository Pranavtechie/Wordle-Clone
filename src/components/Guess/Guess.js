import React from "react";
import { range } from "../../utils";
function Guess({ value }) {
	console.log("value", value);
	return (
		<p className="guess">
			{range(5).map((number) => {
				return (
					<span
						className={`cell ${value[number]?.status}`}
						key={number}
					>
						{value[number]?.letter}
					</span>
				);
			})}
		</p>
	);
}
export default Guess;
