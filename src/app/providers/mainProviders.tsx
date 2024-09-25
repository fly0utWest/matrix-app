import { Provider } from "react-redux"
import { ReactNode } from "react"
import { mainStore } from "../stores"

type Props = {
  children: ReactNode
}

export const MainProviders = ({ children }: Props) => {
  return <Provider store={mainStore}>{children}</Provider>
}
