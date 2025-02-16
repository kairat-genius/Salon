import { STAFF } from "@/api/endpoints";
import {StaffType} from "@/interface";

export async function getStaff() {
    const url = STAFF;
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
    
            const data: StaffType[] = await response.json();
            return data;
    
        } catch (error) {
            console.error("Error fetching category data:", error);
            return []; 
        }
}

