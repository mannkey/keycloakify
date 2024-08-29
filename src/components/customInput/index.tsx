import { cva } from 'class-variance-authority'
import { IFormGroup, IInput } from '../../../@types/IInput/Input'
import { twMerge } from 'tailwind-merge'

const fromGroupClass = cva([
    'flex', 'flex-col', 'space-y-1'
])

const FormGroup = (props: IFormGroup) => {
    return (
        <div className={`${twMerge(fromGroupClass())}`}>
            <label {...props.label} className={`text-sm text-teal-800`}>
                {props.labelText}
            </label>
            <Input
                {...props.input}
            />
        </div>
    )
}
const Input = (props: IInput) => {
    return (
        <input
            {...props}
            className={`!border-2 border-teal-600 rounded-full focus:!border-teal-600 focus:outline-none  w-full min-w-48 p-2`}
        />
    )
}

export { Input, FormGroup } 