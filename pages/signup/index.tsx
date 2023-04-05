import { NextPage } from "next"
import { SyntheticEvent, useState } from "react"
import { Logo } from "@/components/hero-components/logo"

type User = {
  name: string
  email: string
  username: string
  hashedPassword: string
}

const Index: NextPage = ({}) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    username: "",
    hashedPassword: "",
  })

  const onSubmit = async (e: SyntheticEvent) => {
    const data = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
    const res = await data.json()
    e.preventDefault()
  }

  return (
    <div className="h-screen flex justify-center">
      <form
        className=" flex flex-col justify-center items-center space-y-10"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="user[name]"
          placeholder="Your Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          name="user[email]"
          placeholder="Your Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          name="user[username]"
          placeholder="Create a user name"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="text"
          name="user[hashedPassword]"
          placeholder="Create a password"
          value={user.hashedPassword}
          onChange={(e) => setUser({ ...user, hashedPassword: e.target.value })}
        />

        <input
          type="submit"
          name="Sign Up"
          className=" bg-slate-900 text-white p-5"
        />
      </form>
    </div>
  )
}

export default Index
