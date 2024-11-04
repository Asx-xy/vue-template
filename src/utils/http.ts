import axios from 'axios'
import type { AxiosInstance, GenericAbortSignal, AxiosRequestConfig } from 'axios'

export interface responseInterface {
  msg?: string
  body: any
  code: number
}

export interface RequestOptions extends AxiosRequestConfig {
  defaultHandleError?: boolean
}

class Http {
  private http: AxiosInstance
  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 300000
    })
    this.addInterceptors()
  }

  private addInterceptors() {
    // 拦截请求
    this.http.interceptors.request.use(
      config => {
        return config
      },
      err => {
        console.error(err)
        return Promise.reject(err)
      }
    )
    // 返回拦截
    this.http.interceptors.response.use(
      response => {
        const data = response.data
        if (data.code === 200) {
          return data.body
        } else {
          if (data.msg) {
            console.error(data.msg)
          }
          return Promise.reject(data)
        }
      },
      error => {
        let response = error
        let msg = error.message
        const defaultHandleError = error.config.defaultHandleError ?? true
        if (error.response) {
          response = error.response
          if (response.data) {
            response = response.data
            if (response.code === 401) {
              console.error('401')
            }
            if (response.msg) {
              msg = response.msg
            }
          }
        }
        if (msg && defaultHandleError) {
          // TODO: 默认处理错误方式
          console.error(msg)
        }
        return Promise.reject(response)
      }
    )
  }

  private request(url: string, config: RequestOptions | undefined) {
    const _config: RequestOptions = config || {}
    _config.url = url
    return this.http.request(_config)
  }

  get(url: string, params?: any, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    if (params) {
      config.params = params
    }
    return this.http.get(url, config)
  }

  post(url: string, data?: any, signal?: GenericAbortSignal, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    if (signal) {
      config.signal = signal
    }
    return this.http.post(url, data, config)
  }

  postForm(url: string, data?: any, signal?: GenericAbortSignal, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    if (signal) {
      config.signal = signal
    }
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return this.http.post(url, data, config)
  }

  postFormData(url: string, data?: FormData, signal?: GenericAbortSignal, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    if (signal) {
      config.signal = signal
    }
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Content-Type'] = 'multipart/form-data'
    return this.http.post(url, data, config)
  }

  deleteFn(url: string, params?: any, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    if (params) {
      config.params = params
    }
    return this.http.delete(url, config)
  }

  put(url: string, data?: any, options?: RequestOptions): Promise<any> {
    const config: RequestOptions = options || {}
    return this.http.put(url, data, config)
  }
}

export default new Http()
