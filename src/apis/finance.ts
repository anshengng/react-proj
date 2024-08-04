import { post } from "../utils/request";

interface contractProps {
    contract: string;
    name: string;
    type: string;
    status: string;
    yi: string;
    jia: string;
    startDate: string;
    endDate: string;
}

interface contractListProps {
    list: contractProps[];
    total: number;
}

interface SearchData {
    page: number;
    pageSize: number;
    no: string;
    status: string;
    startDate: string;
    endDate: string;
}
export const getContractApi = (data: any) => {
    return post<contractListProps>("/contractList", data);
};

export const getBillListApi = (data: SearchData) => {
    return post<{ total: number; list: any }>("/billList", data);
};
