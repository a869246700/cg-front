import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptor {
  request?: {
    onFulfilled?(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig>
    onReject?(error: Error): unknown
  }
  response?: {
    onFulfilled?(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse>
    onReject?(error: Error): unknown
  }
}
const interceptors = [] as Interceptor[]

export default {
  instance: null as AxiosInstance | null,
  setBaseURL(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 100000
    })
    interceptors.forEach((interceptor) => {
      if (interceptor.request) {
        this.instance!.interceptors.request.use(interceptor.request.onFulfilled, interceptor.request.onReject)
      }
      if (interceptor.response) {
        this.instance!.interceptors.response.use(interceptor.response.onFulfilled, interceptor.response.onReject)
      }
    })
  },
  async get(url: string, config?: AxiosRequestConfig, extra?: unknown) {
    if (url.indexOf('?') === -1) {
      url += '?_=' + +new Date()
    } else {
      url += '&_=' + +new Date()
    }
    return (await this.instance?.get(url, config)) as any
  },
  async post(url: string, params?: unknown, config?: AxiosRequestConfig, extra?: unknown) {
    return (await this.instance?.post(url, params, config)) as any
  },
  async put(url: string, params?: unknown, config?: AxiosRequestConfig, extra?: unknown) {
    return (await this.instance?.put(url, params, config)) as any
  },
  async delete(url: string, config?: AxiosRequestConfig, extra?: unknown) {
    return (await this.instance?.delete(url, config)) as any
  },
  request(options: AxiosRequestConfig) {
    return this.instance?.request(options)
  }
}
