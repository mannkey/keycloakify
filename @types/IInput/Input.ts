import { AriaAttributes, InputHTMLAttributes, LabelHTMLAttributes } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement>, AriaAttributes {
}
export interface IFormGroup {
    label: LabelHTMLAttributes<HTMLLabelElement>
    input: IInput
    labelText: string
}
export interface IPasswordAccessbileProps {
    showPassword: boolean
    setShowPassword: (value: boolean) => void
}