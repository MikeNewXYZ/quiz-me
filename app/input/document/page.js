import BackButton from "@/components/back-button/back-button";
import Button from "@/components/button/button";

//TODO add functionality, layout and styles are done.
export default function InputDocumentPage() {
	return (
		<>
			<form className="mx-auto flex h-screen w-full flex-col items-center justify-center px-2 pb-8 sm:pb-16 lg:w-[40rem]">
				<div className="flex w-full items-center justify-center sm:justify-between">
					<h1 className="animate-fade-down sm:animate-fade-right text-2xl sm:pt-1 sm:text-4xl md:pt-2">
						input document
					</h1>

					<Button
						className="animate-fade-left animate-delay-200 hidden sm:block"
						text="generate"
						type="submit"
					/>
				</div>

				<div className="animate-fade sm:animate-fade-up animate-delay-200 sm:animate-delay-500 relative mt-2 h-[60%] w-full cursor-pointer resize-none border-4 border-neutral-50 bg-transparent placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-[20rem]">
					<input
						className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
						placeholder="input text here"
						type="file"
						accept=".txt"
						required
					/>

					{/* TODO if file is staged, display file name instead of click to upload text */}
					<div className="absolute left-0 top-0 z-0 flex h-full w-full select-none flex-col items-center justify-center gap-2 pb-4 text-center text-2xl md:text-4xl">
						<p>click to upload</p>
						<p>or drag & drop</p>
					</div>
				</div>

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
