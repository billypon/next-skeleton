import { Dictionary } from '@billypon/ts-types'

import { browser } from './common'

const localStorage = browser ? window.localStorage : { } as Dictionary

function getValue(key): string {
  return localStorage[key]
}

function setValue(key, value): void {
  switch (value) {
    case undefined:
    case null:
      delete localStorage[key]
      break
    default:
      localStorage[key] = value
      break
  }
}

class Storage {
}

export const storage = new Storage

export function checkLogin(): boolean {
  return localStorage.token
}
