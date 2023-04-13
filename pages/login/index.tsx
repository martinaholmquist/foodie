import { FormButton } from "@/components/form-components/form-button"
import { FormFielld } from "@/components/form-components/form-field"
import { Layout } from "@/components/layout"
import axios from "axios"
import { NextPage } from "next"
import { SyntheticEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Logo } from "@/components/hero-components/logo"

const Index: NextPage = ({}) => {
  const [action, setAction] = useState("login")
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  })

  const submitRegistration = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/register", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        username: formData.username,
      })
      handleSubmit(e)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })
      if (result?.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Logo
        foodieLogo={"/Loggo_B&W.png"}
        className=" w-24
      "
      />
      <div className=" h-4/5 justify-center items-center flex flex-col">
        {/** <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute top-8 right-8 rounded-xl bg-primaryPink font-semibold text-black px-3 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-secondaryWhite hover:-translate-y-1"
        >
          {action === "login" ? "Register" : "Log In"}
        </button>
        */}

        <form
          className="justify-center items-center flex flex-col gap-5 w-full pl-6 pr-6"
          onSubmit={action == "login" ? handleSubmit : submitRegistration}
        >
          <FormFielld
            htmlFor="email"
            label="Mailadress"
            value={formData.email}
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormFielld
            htmlFor="hashedPassword"
            label="Lösenord"
            placeholder=""
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
          />

          {action == "register" && (
            <>
              <FormFielld
                htmlFor="name"
                label="Name"
                placeholder=""
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <FormFielld
                htmlFor="username"
                placeholder=""
                label="User Name"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </>
          )}
          <FormButton
            value={action === "login" ? "Log In" : "Register"}
            type={"submit"}
          />
        </form>
      </div>
    </Layout>
  )
}

export default Index
