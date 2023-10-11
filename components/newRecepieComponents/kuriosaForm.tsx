interface Props {
  placeholderProp: string
  value?: string
  onChange?: (...args: any) => any
}

const KuriosaForm = ({ placeholderProp, value, onChange }: Props) => {
  return (
    <div className="flex justify-center pt-[10px] w-full">
      <textarea
        name=""
        id=""
        cols={41}
        rows={5}
        placeholder={placeholderProp}
        value={value}
        onChange={onChange}
        className="rounded-sm shadow-lg placeholder: pt-2 pl-2"
      ></textarea>
    </div>
  )
}

export default KuriosaForm
