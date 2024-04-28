import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/background";
import { AppContextWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Quiz-Me",
	description: "Transforming Words into Knowledge",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppContextWrapper>
					<div className="container relative z-10 mx-auto">{children}</div>
					<Background />
				</AppContextWrapper>
			</body>
		</html>
	);
}
