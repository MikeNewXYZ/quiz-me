import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Quiz-Me",
	description: "Transforming Worlds into Knowledge",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative z-10">{children}</div>
				<Background />
			</body>
		</html>
	);
}
