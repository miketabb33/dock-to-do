import { useEffect, useState } from 'react'

type UseApiArgs = {
  path: string
  method?: 'POST' | 'GET' | 'DELETE'
}

export type MakeRequest<B> = {
  body?: B
  onComplete?: () => void
}

export const useApi = <T>({ path, method = 'GET' }: UseApiArgs) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(method === 'GET')

  const fetchApi = async <B>(bodyData?: B) => {
    const body = bodyData ? { body: JSON.stringify(bodyData) } : undefined
    const response = await fetch(path, {
      ...body,
      method,
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    return json
  }

  const makeRequest = <B>({ body, onComplete }: MakeRequest<B>) => {
    setIsLoading(true)
    fetchApi(body)
      .then((res) => {
        setData(res as T)
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(() => {
        if (onComplete) onComplete()
        setIsLoading(false)
      })
  }

  return { data, isLoading, makeRequest }
}

export const useComponentRequest = <T>(path: string) => {
  const { data, isLoading, makeRequest } = useApi<T>({ path, method: 'GET' })
  useEffect(() => makeRequest({}), [])
  return { data, isLoading, refresh: makeRequest }
}
