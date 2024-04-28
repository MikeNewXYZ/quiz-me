"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext({});

export function AppContextWrapper({ children }) {
	const router = useRouter();
	const [textData, setTextData] = useState(null);

	// Check if "textData" is valid, then go to quiz page
	useEffect(() => {
		if (!textData) return;

		router.push("/quiz");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textData]);

	return (
		<AppContext.Provider value={{ textData, setTextData }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
