interface Props {}

const FirstRecepieFromPhoto = ({}) => {
    return (
      <div className="flex items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex justify-center w-96 h-52 bg-secondarypink rounded-md shadow-lg"
        >
          <div className="flex items-center justify-center ">
            <p className="text-xl">Lägg till en bild</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    )
}

export default FirstRecepieFromPhoto