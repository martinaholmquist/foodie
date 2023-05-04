import { useRouter } from "next/router"
import { useState } from "react"

{
  /*ta in vad användaren skriver i sökrutan och skriva det i url:en */
}

interface Props {}

const SearchInput = ({}: Props) => {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault()
    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)
    {
      /* 
    console.log("nuvarande sök", encodedSearchQuery) */
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center p-3">
      <form className="flex justify-center w-2/3" onSubmit={onSearch}>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-black bg-primaryPink rounded-full"
          placeholder="vad söker du efter?"
        />
      </form>
    </div>
  )
}

export default SearchInput
