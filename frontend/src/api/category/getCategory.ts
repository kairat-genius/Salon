import { CATEGORY } from "@/api/endpoints";
import { CategoryType } from "@/interface";

export async function getCategory() {
    const url = CATEGORY;
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            console.error("Failed to fetch category data:", response.statusText);
            return []; 
        }

        const data: CategoryType[] = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching category data:", error);
        return []; 
    }
}
