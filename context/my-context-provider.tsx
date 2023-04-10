import { NextPage } from "next"
import { ReactNode, useState } from "react"
import { createContext } from "react"
//BoilerPlate
interface UserProviderProps {
  children: ReactNode
}

//Properties
interface UserContextProps {
  username: string
  password: string
  setUsername: (username: string) => void
  setPassword: (password: string) => void
}

//Default
const initialUserContext: UserContextProps = {
  username: "",
  password: "",
  setUsername: () => {},
  setPassword: () => {},
}
// Finalize
export const MyContext = createContext<UserContextProps>(initialUserContext)

const MyContextProvider: React.FC<UserProviderProps> = ({}) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const contentValue: UserContextProps = {
    username,
    password,
    setUsername: (username: string) => setUsername(username),
    setPassword: (password: string) => setPassword(password),
  }
  return <MyContext.Provider value={contentValue} children={children} />
}

export default MyContextProvider
