interface Logo {
  foodieLogo: String
}
export const Logo = ({ foodieLogo }: Logo) => {
  return (
    <div className="flex justify-center pt-5">
      <img
        className="w-52 md:w-80"
        src={`${foodieLogo}`}
        alt="foodie-logo"
        width={200}
      />
    </div>
  )
}
