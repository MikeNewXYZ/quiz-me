"use client";

import BackButton from "@/components/back-button/back-button";
import Button from "@/components/button/button";
import createQuiz from "@/lib/createQuiz";
import getYouTubeTranscript from "@/lib/getYouTubeTranscript";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function InputYouTubePage() {
	const [transcript, formAction] = useFormState(getYouTubeTranscript);

	useEffect(() => {
		if (!transcript) return;

		createQuiz(transcript);
	}, [transcript]);

	return (
		<>
			<form
				className="mx-auto flex h-screen w-full flex-col items-center justify-center px-2 pb-8 sm:pb-16 lg:w-[40rem]"
				action={formAction}
			>
				<div className="flex w-full items-center justify-center sm:justify-between">
					<h1 className="animate-fade-down text-2xl sm:animate-fade-right sm:pt-1 sm:text-4xl md:pt-2">
						YouTube URL
					</h1>

					<Button
						className="hidden animate-fade-left animate-delay-200 sm:block"
						text="generate"
						type="submit"
					/>
				</div>

				<input
					className="mt-2 h-14 w-full animate-fade border-4 border-neutral-50 bg-transparent p-2 text-lg animate-delay-200 placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-16 sm:animate-fade-up sm:text-3xl sm:animate-delay-500"
					placeholder="Input YouTube URL"
					type="url"
					name="youtube-url"
					required
				/>

				<Button
					className="mt-4 block w-full animate-fade-up animate-delay-500 sm:hidden"
					text="generate"
					type="submit"
				/>
			</form>

			<BackButton href="/input" text="pick another input" />
		</>
	);
}
