import { useEffect, useState } from 'react'
import { fetchApi } from './fetchApi'

export const useApi = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const makeRequest = () => {
    setIsLoading(true)
    fetchApi({ path })
      .then((res) => {
        setData(res.data as T)
      })
      .catch((err: any) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(makeRequest, [])

  return { data, isLoading, refresh: makeRequest }
}
