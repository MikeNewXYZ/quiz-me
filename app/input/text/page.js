"use client";
import InputForm from "@/components/input-form/input-form";
import { useAppContext } from "@/context";

export default function InputTextPage() {
	const { setTextData } = useAppContext();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Get text from them form
		const formData = new FormData(event.currentTarget);
		const textData = formData.get("main-input");

		// Send text data to app context
		setTextData(textData);
	};

	return (
		<InputForm name="text" handleSubmit={handleSubmit}>
			<textarea
				className="mt-2 h-[60%] w-full animate-fade resize-none border-4 border-neutral-50 bg-transparent p-2 text-sm animate-delay-200 placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-[20rem] sm:animate-fade-up sm:text-xl sm:animate-delay-500"
				placeholder="input text here"
				name="main-input"
				required
			/>
		</InputForm>
	);
}
