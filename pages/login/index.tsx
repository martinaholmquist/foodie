import { FormFielld } from "@/components/form-components/form-field"
import { Layout } from "@/components/layout"
import { NextPage } from "next"
import { useState } from "react"

type FormData = {
  email: string
  hashedPassword: string
  name: string
  username: string
}

const Index: NextPage<FormData> = ({}) => {
  const [credentials, setCredentials] = useState<FormData>({
    email: "",
    hashedPassword: "",
    name: "",
    username: "",
  })
  const [action, setAction] = useState("login")

  return (
    <Layout>
      <div className="h-full justify-center items-center flex flex-col ">
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute top-8 right-8 rounded-xl bg-secondaryWhite font-semibold text-black px-3 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-secondaryWhite hover:-translate-y-1"
        >
          {action === "login" ? "Register" : "Log In"}
        </button>

        <h1 className=" p-5">Welcome To Foodie</h1>
        <form
          method="POST"
          className="justify-center items-center flex flex-col gap-5"
        >
          <FormFielld
            htmlFor="email"
            label="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <FormFielld
            htmlFor="hashedPassword"
            label="Password"
            value={credentials.hashedPassword}
            onChange={(e) =>
              setCredentials({ ...credentials, hashedPassword: e.target.value })
            }
          />

          {action == "register" && (
            <>
              <FormFielld
                htmlFor="name"
                label="Name"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({ ...credentials, name: e.target.value })
                }
              />
              <FormFielld
                htmlFor="username"
                label="UserName"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </>
          )}

          <button
            type="submit"
            name="_action"
            value={action}
            className="rounded-xl mt-2 bg-secondaryWhite px-3 py-2 text-black font-semibold transition duration-300 ease-in-out  hover:bg-black hover:text-secondaryWhite hover:-translate-y-1"
          >
            {action === "login" ? "Log In" : "Register"}
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Index
