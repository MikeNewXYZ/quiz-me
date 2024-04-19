"use client";
import { useEffect, useState } from "react";

export default function Background() {
	const [backgroundPosition, setBackgroundPosition] = useState(0);

	useEffect(() => {
		let lastTime;

		const playBackgroundAnimation = (time) => {
			if (lastTime != null) {
				const deltaTime = time - lastTime;
				setBackgroundPosition((prev) => prev + deltaTime * 0.005);
			}

			lastTime = time;
			requestAnimationFrame(playBackgroundAnimation);
		};

		requestAnimationFrame(playBackgroundAnimation);
	}, []);

	return (
		<div
			className="background-grid fixed left-0 top-0 z-0 h-full w-full bg-center bg-repeat"
			style={{
				backgroundPosition: `${backgroundPosition}px ${backgroundPosition}px`,
			}}
		/>
	);
}
