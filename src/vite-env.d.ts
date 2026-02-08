/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_ADDRESS: string;
  readonly VITE_LINKEDIN_USERNAME: string;
  readonly VITE_GITHUB_USERNAME: string;
  readonly VITE_TWITTER_USERNAME: string;
  readonly VITE_CV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
