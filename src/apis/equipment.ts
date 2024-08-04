import { post } from "../utils/request";

interface SearchData {
    name: string;
    person: string;
    page: number;
    pageSize: number;
}

export function getEquipmentList(data: SearchData) {
    return post<{ list: any[]; total: number }>("/equipmentList", data);
}
