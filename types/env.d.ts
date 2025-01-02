// env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_API_BASEURL: string;
  readonly VITE_APP_MOCK_BASEURL: string;
  readonly VITE_ROUTER_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
