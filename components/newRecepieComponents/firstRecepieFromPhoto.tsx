interface Props {}

const FirstRecepieFromPhoto = ({}) => {
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
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    )
}

export default FirstRecepieFromPhoto