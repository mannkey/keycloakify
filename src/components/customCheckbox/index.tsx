import { IInput } from "../../../@types/IInput/Input"

interface IRadio extends IInput {
    label: string
    labelHtmlFor: string
}
const Radio = (props: IRadio) => {
    return (
        <div className="flex items-center">
            <input
                {...props}
                type="checkbox"
                className="size-4 border border-teal-600 rounded checked:!bg-teal-600 checked:border-transparent focus:outline-none relative -top-1 cursor-pointer"
            />
            <label htmlFor={props.labelHtmlFor} className="ml-2 text-teal-900">
                {props.label}
            </label>
        </div>

    )
}

export default Radio