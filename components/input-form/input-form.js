"use client";
import Button from "../button/button";

export default function InputForm({ children, handleSubmit, name }) {
	return (
		<form
			className="mx-auto flex h-screen w-full flex-col items-center justify-center px-2 pb-8 sm:pb-16 lg:w-[40rem]"
			onSubmit={handleSubmit}
		>
			<div className="flex w-full items-center justify-center sm:justify-between">
				<h1 className="animate-fade-down text-2xl sm:animate-fade-right sm:pt-1 sm:text-4xl md:pt-2">
					Input {name}
				</h1>

				<Button
					className="hidden animate-fade-left animate-delay-200 sm:block"
					text="generate"
					type="submit"
				/>
			</div>

			{children}

			<Button
				className="mt-4 block w-full animate-fade-up animate-delay-500 sm:hidden"
				text="generate"
				type="submit"
			/>
		</form>
	);
}
