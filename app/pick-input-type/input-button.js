"use client";
import Link from "next/link";

export default function InputButton({ Icon, text, href, ...rest }) {
	return (
		<Link className={`group ${rest.className}`} href={href}>
			<div className="h-28 w-28 border-4 border-neutral-50 p-2 transition-colors group-hover:border-red-600 group-hover:text-red-600">
				<Icon.type {...Icon.props} />
			</div>
			<p className="mt-2 text-sm uppercase transition-colors group-hover:text-red-600">
				{text}
			</p>
		</Link>
	);
}
