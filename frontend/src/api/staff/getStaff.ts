import { STAFF } from "@/api/endpoints";
import {StaffType} from "@/interface";

export async function getStaff() {
    const url = STAFF;
    const headers = {
        "Content-Type": "application/json",
    };

    const response = await fetch(url, {
        method: "GET",
        headers: headers,
    });

    const data: StaffType[] = await response.json();
    return data;
}