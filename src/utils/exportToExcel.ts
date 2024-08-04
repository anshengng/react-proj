import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
export const exportToExcel = (data: any[], header: string[]) => {
    //创建一个工作表
    const ws = XLSX.utils.json_to_sheet(data, { header });
    //创建一个工作簿
    const wb = XLSX.utils.book_new();
    //把我们的工作表加到工作簿中
    XLSX.utils.book_append_sheet(wb, ws, "sheet1");
    //转成二进制数据
    const buff = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    console.log(new Blob([buff]));
    
    //保存和下载
    saveAs(new Blob([buff], { type: "application/octet-stream" }), "selected-data.xlsx");
};
