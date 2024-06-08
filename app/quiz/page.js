"use client";
import { useAppContext } from "@/context";
import createQuiz from "@/lib/createQuiz";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
	ArrowFatLeft,
	ArrowFatRight,
	CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import BackButton from "@/components/back-button/back-button";

export default function QuizPage() {
	const { textData } = useAppContext();
	const [quiz, setQuiz] = useState(null);
	const [quizIndex, setQuizIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const router = useRouter();
	const initialized = useRef(false);

	useEffect(() => {
		// stops useeffect from running twice and creating 2 quizzes
		if (initialized.current) return;
		initialized.current = true;

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
	}, []);

	const handlePagination = (index) => {
		setShowAnswer(false);
		setQuizIndex(index);
	};

	if (!quiz) {
		return (
			<main className="flex h-dvh w-full items-center justify-center overflow-hidden pb-10">
				<CircleNotch
					className="animate-spin"
					size="50%"
					color="currentColor"
					weight="light"
				/>
			</main>
		);
	}

	return (
		<>
			<main className="flex h-dvh w-full items-center justify-center gap-2 px-2 pb-10">
				<button
					className="text-2xl transition-colors hover:text-red-600 sm:text-5xl"
					style={{
						opacity: quizIndex === 0 ? 0.5 : 1,
						pointerEvents: quizIndex === 0 ? "none" : "all",
					}}
					disabled={quizIndex === 0}
					onClick={() => handlePagination(quizIndex - 1)}
				>
					<ArrowFatLeft />
				</button>

				<button
					className="w-full border-4 p-4 text-center sm:w-[30rem]"
					onClick={() => setShowAnswer(!showAnswer)}
				>
					<p className="text-xs uppercase sm:text-base">
						question <span>{quizIndex + 1}</span> of <span>{quiz.length}</span>
					</p>

					<h1 className="py-8 text-lg normal-case sm:text-xl">
						{showAnswer ? quiz[quizIndex].answer : quiz[quizIndex].question}
					</h1>

					<div className="mt-4 uppercase">
						{showAnswer ? "click to show question" : "click to reveal answer"}
					</div>
				</button>

				<button
					className="text-2xl transition-colors hover:text-red-600 sm:text-5xl"
					style={{
						opacity: quizIndex === quiz.length - 1 ? 0.5 : 1,
						pointerEvents: quizIndex === quiz.length - 1 ? "none" : "all",
					}}
					disabled={quizIndex === quiz.length - 1}
					onClick={() => handlePagination(quizIndex + 1)}
				>
					<ArrowFatRight />
				</button>
			</main>

			<BackButton href="/" text="back to home" />
		</>
	);
}
