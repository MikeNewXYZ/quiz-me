import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@/components/background/background";
import { AppContextWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });
const blanka = localFont({
	src: "./fonts/Blanka-Regular.otf",
	variable: "--font-blanka",
});

export const metadata = {
	title: "Quiz-Me",
	description: "Transforming Words into Knowledge",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${blanka.variable}`}>
				<AppContextWrapper>
					<div className="container relative z-10 mx-auto">{children}</div>
					<Background />
				</AppContextWrapper>
			</body>
		</html>
	);
}
