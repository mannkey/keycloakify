import { IInput } from "../../../@types/IInput/Input";
import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge'

const buttonStyle = cva([
    '!bg-teal-600 rounded-full p-2 text-sm font-medium w-full text-teal-100 hover:bg-teal-900'
])

const SuccessButton = (props: IInput) => {

    return (
        <input
            {...props}
            className={twMerge(buttonStyle())}
        />
    )
}
export default SuccessButton