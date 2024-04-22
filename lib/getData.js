"use server";
import xss from "xss";

export default async function getData(formData, name) {
	return xss(formData.get(name));
}
