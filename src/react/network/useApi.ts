import { useEffect, useState } from 'react'

type UseApiArgs = {
  path: string
  method?: 'POST' | 'GET'
}

export const useApi = <T>({ path, method = 'GET' }: UseApiArgs) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(method === 'GET')

  const fetchApi = async () => {
    const response = await fetch(path, { method })
    const json = await response.json()
    return json
  }
  const makeRequest = () => {
    setIsLoading(true)
    fetchApi()
      .then((res) => {
        setData(res as T)
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  return { data, isLoading, makeRequest }
}

export const useComponentRequest = <T>(path: string) => {
  const { data, isLoading, makeRequest } = useApi<T>({ path, method: 'GET' })
  useEffect(makeRequest, [])
  return { data, isLoading, refresh: makeRequest }
}
