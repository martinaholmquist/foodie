interface Props {}

const KuriosaForm = ({}) => {
  return (
    <div className="flex justify-center pt-[10px]">
      <label htmlFor="">
        <textarea
          name=""
          id=""
          cols={41}
          rows={5}
          placeholder="Vad vill du berätta?"
          className="rounded-sm shadow-lg placeholder: pt-2 pl-2"
        ></textarea>
      </label>
    </div>
  )
}

export default KuriosaForm
