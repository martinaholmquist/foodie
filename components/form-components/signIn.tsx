import { SyntheticEvent, useState } from "react"

interface CredentialsProps {
  email: string
  hashedPassword: string
}

export const SignIn = ({ email, hashedPassword }: CredentialsProps) => {
  const [credentials, setCredentials] = useState<CredentialsProps>({
    email: "",
    hashedPassword: "",
  })
  const handleSubmit = async (e: SyntheticEvent) => {
    const data = await fetch()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="text"
          name="hashedPassword"
          onChange={(e) =>
            setCredentials({ ...credentials, hashedPassword: e.target.value })
          }
        />
      </form>
    </div>
  )
}
