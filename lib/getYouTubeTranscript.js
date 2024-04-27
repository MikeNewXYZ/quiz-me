"use server";
import { YoutubeTranscript } from "youtube-transcript";
import xss from "xss";

export default async function getYouTubeTranscript(url) {
	// Sanitize untrusted HTML
	url = xss(url);

	// Scrap transcript from youtube video.
	// map and join to just get the text instead of entire obj.
	// also remove whitespace if more than 1.
	const transcript = (await YoutubeTranscript.fetchTranscript(url))
		.map(({ text }) => text)
		.join("")
		.replace(/\s/g, " ");

	return transcript;
}
