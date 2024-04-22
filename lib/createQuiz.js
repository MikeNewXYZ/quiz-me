"use server";
import OpenAI from "openai";

const openai = new OpenAI();

export default async function createQuiz(text) {
	console.log(text);

	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				content: `
                    You will be given a text. You will create a quiz from that text.
                    The quiz can have as many questions as would be appropriate.
                    There can not be any similar or repeating questions.
                    Do not refer to the given text as "text" in the question.
                    The quiz should be formatted as a JSON in the following way:
                    {
                        "quiz": [
                          {
                            "question": "question 1",
                            "answer": "answer 1"
                          },
                          {
                            "question": "question 2",
                            "answer": "answer 2"
                          },
                          {
                            "question": "question 3",
                            "answer": "answer 3"
                          }
                        ]
                      }
                `,
			},
			{
				role: "user",
				content: text,
			},
		],
		model: "gpt-3.5-turbo",
	});

	const quiz = JSON.parse(completion.choices[0].message.content).quiz;

	console.log(quiz);
}
