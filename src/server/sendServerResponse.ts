import { Response } from 'express'
import { ResponseDto } from '../dto/ResponseDto'

type SendResponseArgs = {
  res: Response
  code: number
  data?: any
  error?: any
}

export const sendResponse = ({ res, code, data, error }: SendResponseArgs) => {
  res.status(code).json(getServerResponse(data, error)).send()
}

const getServerResponse = (data?: any, error?: any): ResponseDto => {
  if (data)
    return {
      data: data,
      error: null,
      isSuccessful: true,
    }
  else if (error) {
    return {
      data: null,
      error: error,
      isSuccessful: false,
    }
  }

  return {
    data: null,
    error: null,
    isSuccessful: true,
  }
}
