import Heading from "@/components/auth-components/header"
import { FormButton } from "@/components/form-components/form-button"
import { FormFielld } from "@/components/form-components/form-field"
import { GoogleButton } from "@/components/form-components/google-button"
import { Layout } from "@/components/layout"
import NavBar from "@/components/navbar"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { SyntheticEvent, useState } from "react"

const AuthModal = () => {
  const [action, setAction] = useState("register")
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
        router.push("/home")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
    <Layout>
      <NavBar />
      <Heading headingContent="Skapa konto eller logga in" />
      <form onSubmit={action == "login" ? handleSubmit : submitRegistration}>
        {action == "register" && (
          <FormFielld
            htmlFor="username"
            label="Användarnamn"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        )}
        <FormFielld
          htmlFor="email"
          label="Mailadress"
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <FormFielld
          htmlFor="password"
          label="Lösenord"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div className="mt-11">
          <FormButton
            value={action == "register" ? "Skapa konto" : "Logga in"}
            type={"submit"}
            className="rounded-full  w-full h-12 bg-crimsonRed text-white shadow-md shadow-black/25  font-semibold "
          />
          <FormButton
            value={action == "register" ? "Logga in" : "Skapa konto"}
            type={"button"}
            className="rounded-full bg-white shadow-md shadow-black/25 w-full h-12   text-black  font-semibold"
            onClick={() =>
              setAction(action == "register" ? "login" : "register")
            }
          />
          <GoogleButton
            value={"Fortsätt med Google"}
            type={"button"}
            className="rounded-full bg-white w-full h-12   text-black  font-semibold shadow-md shadow-black/25"
            onClick={() => signIn("google")}
          />
        </div>
      </form>
    </Layout>
  )
}
export default AuthModal
