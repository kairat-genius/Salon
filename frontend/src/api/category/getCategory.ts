import { CATEGORY } from "@/api/endpoints";
import {CategoryType} from "@/interface";

export async function getCategory() {
    const url = CATEGORY;
    const headers = {
        "Content-Type": "application/json",
    };

    const response = await fetch(url, {
        method: "GET",
        headers: headers,
    });

    const data: CategoryType[] = await response.json();
    return data;
}