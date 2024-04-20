import Button from "@/components/button/button";
import Link from "next/link";

export default function Custom404() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center pb-14 text-center">
			<h1 className="animate-fade-right text-3xl md:text-5xl">
				Page Not Found
			</h1>
			<Link className="animate-fade-left animate-delay-200" href="/">
				<Button text="Back to HomePage" />
			</Link>
		</main>
	);
}
