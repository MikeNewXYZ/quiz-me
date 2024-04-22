"use server";
import { YoutubeTranscript } from "youtube-transcript";
import getData from "./getData";

export default async function getYouTubeTranscript(prevState, formData) {
	const url = await getData(formData, "youtube-url");

	// Scrap transcript from youtube video.
	// map and join to just get the text instead of entire obj.
	// also remove whitespace if more than 1.
	const transcript = (await YoutubeTranscript.fetchTranscript(url))
		.map(({ text }) => text)
		.join("")
		.replace(/\s/g, " ");

	return transcript;
}
