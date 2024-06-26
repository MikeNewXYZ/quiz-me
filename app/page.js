import Button from "@/components/button/button";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex h-dvh w-full flex-col items-center justify-center pb-4 text-center sm:pb-14">
			<h1 className="animate-fade-right font-display text-6xl leading-[normal_!important] animate-delay-100 sm:text-8xl md:text-9xl">
				QUIZ-ME
			</h1>
			<p className="mt-4 animate-fade-left text-xs animate-delay-300 md:text-lg">
				Transforming Words Into Knowledge
			</p>
			<Link className="mt-6" href="/pick-input-type">
				<Button
					className="animate-fade-up animate-delay-500"
					text="get started"
				/>
			</Link>
		</main>
	);
}
