import BackButton from "@/components/back-button/back-button";

export default function InputLayout({ children }) {
	return (
		<>
			{children}

			<BackButton href="/pick-input-type" text="pick another input" />
		</>
	);
}
