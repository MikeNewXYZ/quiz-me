import { ArrowFatLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function BackButton({ href, text }) {
	return (
		<Link
			className="animate-fade-left group fixed bottom-2 left-2 z-20 flex items-center gap-2 uppercase transition-colors hover:text-red-600 sm:bottom-10 sm:left-10"
			href={href}
		>
			<ArrowFatLeft
				className="group-hover:animate-wiggle group-hover:animate-infinite"
				size="2rem"
				weight="light"
			/>
			<span>{text}</span>
		</Link>
	);
}
