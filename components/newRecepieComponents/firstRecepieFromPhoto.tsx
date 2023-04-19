interface Props {
  value: string
  onChange?: (...args: any) => any
}

const FirstRecepieFromPhoto = ({value, onChange}: Props) => {
    return (
      <div className="flex items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex justify-center w-96 h-52 bg-secondarypink rounded-md shadow-lg"
        >
          <div className="flex flex-col items-center justify-center ">
            <img src="image 60.svg" alt="foto link" />
            <p className="text-xl">Lägg till en bild</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" value={value} onChange={onChange}/>
        </label>
      </div>
    )
}

export default FirstRecepieFromPhoto