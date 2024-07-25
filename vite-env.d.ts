/// <reference types="vite/client" />

export interface ImportMetaEnv {
    VITE_USE_MOCKJS: string;
    // more env variables...
}

export interface ImportMeta {
    readonly env: ImportMetaEnv;
}
