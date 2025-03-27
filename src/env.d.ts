/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const PUBLIC_RSDOCTOR: string

declare interface ImportMetaEnv {
  readonly PUBLIC_RSDOCTOR: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
