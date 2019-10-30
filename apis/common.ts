import Axios from 'axios-observable'
import { useInterceptors } from '@billypon/react-utils/axios'

import { publicRuntimeConfig } from '~/utils/config'

export default class {
  protected axios: Axios

  constructor(isvName: string) {
    this.axios = Axios.create({ baseURL: this.getBaseUrl() })
    useInterceptors(this.axios)
  }

  getBaseUrl(): string {
    return publicRuntimeConfig.PUBLIC_API
  }
}
