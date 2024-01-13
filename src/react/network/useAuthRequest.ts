import { useEffect, useState } from 'react'

export const useAsync = <T>() => {
  const [data, setData] = useState<T | null>(null)

  const makeRequest = async () => {
    const response = await fetch('/api/todo')
    const json = await response.json()
    return json
  }

  useEffect(() => {
    makeRequest()
      .then((res) => {
        setData(res as T)
      })
      .catch((err: any) => {
        console.log(err)
      })
  })

  return { data }
}
