import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}
const Input = ({...rest}:IProps) => {
  return (
    <>
    <input type="text" name="" id="" className="border border-gray-700"{...rest} />
    </>
  )
}

export default Input 