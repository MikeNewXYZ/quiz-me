import BackButton from "@/components/back-button/back-button";
import Button from "@/components/button/button";

//TODO add functionality, layout and styles are done.
export default function InputTextPage() {
	return (
		<>
			<form className="mx-auto flex h-screen w-full flex-col items-center justify-center px-2 pb-8 sm:pb-16 lg:w-[40rem]">
				<div className="flex w-full items-center justify-center sm:justify-between">
					<h1 className="animate-fade-down sm:animate-fade-right text-2xl sm:pt-1 sm:text-4xl md:pt-2">
						input text
					</h1>

					<Button
						className="animate-fade-left animate-delay-200 hidden sm:block"
						text="generate"
						type="submit"
					/>
				</div>

				<textarea
					className="animate-fade sm:animate-fade-up animate-delay-200 sm:animate-delay-500 mt-2 h-[60%] w-full resize-none border-4 border-neutral-50 bg-transparent p-2 text-sm placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-[20rem] sm:text-xl"
					placeholder="input text here"
					required
				/>

				<Button
					className="animate-fade-up animate-delay-500 mt-4 block w-full sm:hidden"
					text="generate"
					type="submit"
				/>
			</form>
			<BackButton href="/input" text="pick another input" />
		</>
	);
}
