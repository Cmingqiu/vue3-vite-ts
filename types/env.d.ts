interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_USELOCALMOCK: boolean
  readonly VITE_USEPRODMOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
