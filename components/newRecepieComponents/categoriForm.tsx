import AddfieldForm from "./addfieldForm"

interface Props {
  name: string
  a: string
  b: string
  c: string
  d: string
  e: string
  f: string
  value: string
    onChange?: (...args: any) => any
}

const CategoriForm = ({ name, a, b, c, d, e, f, value, onChange }: Props) => {
    return (
      <div className="flex space-x-4">
        <div className="pt-4 ">
              <input type="radio" name="" id=""  placeholder="1"/>
            </div>
            
        <div className="pt-4 ">
              <input type="radio" name="" id=""  placeholder="1"/>
            </div>
            
        <div className="pt-4 ">
              <input type="radio" name="" id=""  placeholder="1"/>
            </div>
            
        <div className="pt-4 ">
              <input type="radio" name="" id=""  placeholder="1"/>
            </div>
            
        <div className="pt-4 ">
              <input type="radio" name="" id=""  placeholder="1"/>
        </div>
      </div>
    )
}

export default CategoriForm