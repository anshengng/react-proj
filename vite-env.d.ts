/// <reference types="vite/client" />

export interface ImportMetaEnv {
    readonly VITE_USE_MOCKJS: string;
    readonly VITE_BASE_URL: string;
    // more env variables...
}

export interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// export interface xx extends ImportMetaEnv{}
