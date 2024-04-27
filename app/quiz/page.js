"use client";
import { useAppContext } from "@/context";
import createQuiz from "@/lib/createQuiz";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function QuizPage() {
	const { textData } = useAppContext();
	const [quiz, setQuiz] = useState(null);
	const router = useRouter();

	useEffect(() => {
		// If "textData" is empty go back a page.
		// Usually happens if user directly navigates to "/quiz".
		if (!textData) {
			router.back();
			return;
		}

		// Generate and fetch quiz from "textData".
		const fetchData = async () => {
			try {
				const quiz = await createQuiz(textData);
				setQuiz(quiz);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textData]);

	if (!quiz) {
		return (
			<main className="flex h-screen w-full items-center justify-center pb-10">
				<CircleNotch
					className="animate-spin"
					size="50%"
					color="currentColor"
					weight="light"
				/>
			</main>
		);
	}

	//TODO display quiz when generated
	return <div>quiz</div>;
}
