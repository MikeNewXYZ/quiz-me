import {
	TextAlignLeft,
	FileText,
	YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import InputButton from "./input-button";
import BackButton from "@/components/back-button/back-button";

export default function InputPage() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center text-center uppercase sm:pb-14">
			<h1 className="animate-fade-down text-2xl sm:text-4xl">
				pick input type
			</h1>

			<div className="mt-8 flex flex-wrap items-start justify-center gap-4 sm:gap-8">
				<InputButton
					className="animate-fade-up animate-delay-100 group"
					Icon={
						<TextAlignLeft
							className="group-hover:animate-infinite group-hover:animate-wiggle"
							size="100%"
							color="currentColor"
							weight="light"
						/>
					}
					text="Text"
					href="/input/text"
				/>

				<InputButton
					className="animate-fade-up animate-delay-300 group"
					Icon={
						<FileText
							className="group-hover:animate-infinite group-hover:animate-wiggle"
							size="100%"
							color="currentColor"
							weight="light"
						/>
					}
					text="Document"
					href="/input/document"
				/>

				<InputButton
					className="animate-fade-up animate-delay-500 group"
					Icon={
						<YoutubeLogo
							className="group-hover:animate-infinite group-hover:animate-wiggle"
							size="100%"
							color="currentColor"
							weight="light"
						/>
					}
					text="YouTube"
					href="/input/youtube"
				/>
			</div>

			<BackButton href="/" text="back to home" />
		</main>
	);
}
