import { NextPage } from "next"
import { SyntheticEvent } from "react"

interface User {
    name: string,
    email: string,
    username:string,
    hashedPassword: string
}

const Index: NextPage<User> = ({}) => {
const handleSubmit = (e : SyntheticEvent)=>{
    e.preventDefault()
}
  return (
    <div>
      <form action="/api/signup" method="POST">
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="User Name" name="username" />
        <input type="text" placeholder="Password" name="hashedPassword" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Index
