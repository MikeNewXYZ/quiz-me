"use client";

import BackButton from "@/components/back-button/back-button";
import Button from "@/components/button/button";

export default function InputYouTubePage() {
	return (
		<input
			className="mt-2 h-14 w-full animate-fade border-4 border-neutral-50 bg-transparent p-2 text-lg animate-delay-200 placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-16 sm:animate-fade-up sm:text-3xl sm:animate-delay-500"
			placeholder="Input YouTube URL"
			type="url"
			name="main-input"
			required
		/>
	);
}
