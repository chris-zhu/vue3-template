import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export type MaybeArray<T> = T | Array<T>
