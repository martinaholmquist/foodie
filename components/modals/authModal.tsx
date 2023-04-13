import Heading from "@/components/auth-components/header"
import { FormButton } from "@/components/form-components/form-button"
import { FormFielld } from "@/components/form-components/form-field"
import { GoogleButton } from "@/components/form-components/google-button"
import { Layout } from "@/components/layout"
import NavBar from "@/components/navbar"
import { useState } from "react"

const AuthModal = () => {
  const [action, setAction] = useState("login")

  return (
    <Layout>
      <NavBar />
      <Heading headingContent="Logga in eller skapa konto" />
      {action == "register" && (
        <FormFielld
          htmlFor="username"
          label="Användarnamn"
          type="text"
          value={null}
        />
      )}
      <FormFielld htmlFor="email" label="Mailadress" type="text" value={null} />
      <FormFielld
        htmlFor="password"
        label="Lösenord"
        type="password"
        value={null}
      />

      <div className="mt-11">
        <FormButton
          value={"Logga in"}
          type={"submit"}
          className="rounded-md  w-full h-12 bg-primaryPink  text-black  font-semibold "
          onClick={() => setAction("login")}
        />
        <FormButton
          value={"Skapa Konto"}
          type={"submit"}
          className="rounded-md border-black border-[1px] w-full h-12   text-black  font-semibold"
          onClick={() => setAction("register")}
        />
        <GoogleButton
          value={"Fortsätt med Google"}
          type={"submit"}
          className="rounded-md w-full h-12   text-black  font-semibold"
        />
      </div>
    </Layout>
  )
}
export default AuthModal
