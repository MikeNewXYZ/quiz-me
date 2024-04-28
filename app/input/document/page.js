"use client";
import InputForm from "@/components/input-form/input-form";
import { useAppContext } from "@/context/index";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FileText } from "@phosphor-icons/react";

// TODO add error toast notification on error.
export default function InputDocumentPage() {
	const { setTextData } = useAppContext();
	const [file, setFile] = useState(null);
	const onDrop = useCallback((acceptedFiles) => setFile(acceptedFiles[0]), []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: onDrop,
		accept: { "text/html": [".txt", ".html", ".htm"] },
		multiple: false,
		maxFiles: 1,
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!file) return;

		const reader = new FileReader();

		reader.onerror = () => console.error("file reading has failed");
		reader.onload = () => setTextData(reader.result);
		reader.readAsText(file);
	};

	return (
		<InputForm name="document" handleSubmit={handleSubmit}>
			<div
				className="relative mt-2 flex h-[60%] w-full animate-fade cursor-pointer resize-none  items-center justify-center border-4 border-neutral-50 bg-transparent pb-5 text-center text-2xl animate-delay-200 placeholder:uppercase focus:border-red-600 focus:outline-none sm:mt-4 sm:h-[20rem] sm:animate-fade-up sm:text-3xl sm:animate-delay-500"
				{...getRootProps()}
			>
				<input {...getInputProps()} />

				{isDragActive ? (
					<p>drop file here</p>
				) : (
					<>
						{file ? (
							<div className="w-full overflow-hidden text-balance p-4">
								<p>click generate</p>
								<p className="mt-2">to create quiz</p>
								<p className="mt-4 flex items-center justify-center gap-1.5 text-sm">
									<FileText fontSize="inherit" />{" "}
									<span className="truncate">{file.path}</span>
								</p>
							</div>
						) : (
							<div>
								<p>click to upload</p>
								<p className="mt-2">or drag & drop</p>
							</div>
						)}
					</>
				)}
			</div>
		</InputForm>
	);
}
