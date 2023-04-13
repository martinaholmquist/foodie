interface HeadingPropos {
  headingContent: string
}

const Heading = ({ headingContent }: HeadingPropos) => {
  return (
    <div className=" flex justify-center pt-[30px] pb-12">
      <h1 className=" font-semibold text-2xl">{headingContent}</h1>
    </div>
  )
}
export default Heading
