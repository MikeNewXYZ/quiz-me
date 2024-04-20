import Button from "@/components/button/button";

export default function Home() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center pb-14 text-center">
			<h1 className="font-display animate-fade-right animate-delay-100 text-6xl sm:text-8xl md:text-9xl">
				QUIZ-ME
			</h1>
			<p className="animate-fade-left animate-delay-300 mt-4 text-xs md:text-lg">
				Transforming Worlds Into Knowledge
			</p>
			<Button
				className="animate-fade-up animate-delay-500"
				text="get started"
			/>
		</main>
	);
}
