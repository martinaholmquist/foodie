import useSWR from "swr"
import fetcher from "@/libs/fetcher"

const useRecepies = () => {
  const { data, error, isLoading } = useSWR("/api/recepies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  return { data, error, isLoading }
}
export default useRecepies
