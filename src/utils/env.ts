import _ from "lodash";
import { ImportMetaEnv } from "../../vite-env";

const env = _.cloneDeep(import.meta.env);
Object.entries(env as ImportMetaEnv).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
        env[key] = value === "true" ? true : false;
    }
    if (/^\d+$/.test(value)) {
        env[key] = Number(value);
    }
    if (value === null) env[key] = null;
    if (value === undefined) env[key] = undefined;
});

export default env as ImportMetaEnv;
//类型 "ImportMetaEnv" 到类型 "import("c:/Users/28719/Desktop/react-study/react-proj/vite-env").ImportMetaEnv"
//的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"。
// 类型 "ImportMetaEnv" 中缺少属性 "VITE_USE_MOCKJS"，但类型
//"import("c:/Users/28719/Desktop/react-study/react-proj/vite-env").ImportMetaEnv" 中需要该属性。
//解决方法：export interface xx extends ImportMetaEnv{}



//解决 import.meta无env
//在tsconfig.json中添加"types": [ "vite/client" ]，用来提供import.meta.env 上 Vite 注入的环境变量的类型定义   
// "compilerOptions": {
// 	"types": [  "vite/client" ]
// }
//等同于在vite-env.d.ts添加/// <reference types="vite/client" />