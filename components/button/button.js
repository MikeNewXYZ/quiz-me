"use client";
import { useState, useEffect } from "react";

export default function Button({ text, ...rest }) {
	const [buttonText, setButtonText] = useState(text);
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		if (!isHover) {
			setButtonText(text);
			return;
		}

		const scrabbleText = setInterval(() => {
			const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			let splitText = text.split("");

			let randomPosition;
			const getRandomPosition = () => {
				randomPosition = Math.floor(Math.random() * splitText.length);

				if (splitText[randomPosition] === " ") {
					getRandomPosition();
				}
			};
			getRandomPosition();

			splitText[randomPosition] = characters.charAt(
				Math.floor(Math.random() * characters.length),
			);
			const newText = splitText.join("");

			setButtonText(newText);
		}, 100);

		return () => clearInterval(scrabbleText);
	}, [text, isHover]);

	return (
		<button
			className="mt-6 border-4 border-neutral-50 p-3 text-2xl uppercase transition-transform hover:scale-105 active:scale-100"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			{...rest}
		>
			{buttonText}
		</button>
	);
}
