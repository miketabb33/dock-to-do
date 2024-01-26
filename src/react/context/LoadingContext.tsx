import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { ChildrenProps } from '../types/ChildrenProps'

type LoadingContextProps = {
  isShowing: boolean
  show: () => void
  hide: () => void
}

const LoadingContext = createContext<LoadingContextProps>({
  isShowing: false,
  show: () => {},
  hide: () => {},
})

const LoadingContextProvider = ({ children }: ChildrenProps) => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        isShowing,
        show: () => setIsShowing(true),
        hide: () => setIsShowing(false),
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useAutoLoading = (isLoading: boolean) => {
  const { show, hide } = useLoadingContext()
  useEffect(() => {
    if (isLoading) show()
    else hide()
  }, [isLoading])
}

export default LoadingContextProvider

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}
