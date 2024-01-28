type RestMethod = 'POST' | 'GET' | 'DELETE' | 'PUT'

type FetchApiArgs<B> = {
  path: string
  method?: RestMethod
  body?: B
}

export const fetchApi = async <B = {}>({
  path,
  method = 'GET',
  body: bodyData,
}: FetchApiArgs<B>) => {
  const body = bodyData ? { body: JSON.stringify(bodyData) } : undefined
  const response = await fetch(path, {
    ...body,
    method,
    headers: { 'content-type': 'application/json' },
  })

  const json = await response.json()
  return json
}
