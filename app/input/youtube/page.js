"use client";
import InputForm from "@/components/input-form/input-form";
import { useAppContext } from "@/context";
import getYouTubeTranscript from "@/lib/getYouTubeTranscript";

export default function InputYouTubePage() {
	const { setTextData } = useAppContext();

	const handleSubmit = async (event) => {
		event.preventDefault();

		// get url from form
		const formData = new FormData(event.currentTarget);
		const url = formData.get("main-input");

		// TODO check if valid youtube url
		// TODO add error toast notification

		// get transcript from youtube video using url
		// send transcript to app context
		try {
			const textData = await getYouTubeTranscript(url);
			setTextData(textData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<InputForm name="youtube url" handleSubmit={handleSubmit}>
			<input
				className="mt-2 h-14 w-full animate-fade border-4 border-neutral-50 bg-transparent p-2 text-lg animate-delay-200 placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-16 sm:animate-fade-up sm:text-3xl sm:animate-delay-500"
				placeholder="Input YouTube URL"
				type="url"
				name="main-input"
				required
			/>
		</InputForm>
	);
}
