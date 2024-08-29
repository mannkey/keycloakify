import { useState } from 'react'
import { IconButton } from '@radix-ui/themes'
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons'
import { IInput, IPasswordAccessbileProps } from '../../../@types/IInput/Input'
import { Input } from '../customInput'

const PasswordInput = (props: IInput) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return (

        <div className="relative">
            <Input
                {...props}
                name="password"
                type={!showPassword ? "password" : "text"}
            />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {RenderPasswordAccessible({ showPassword, setShowPassword })}
            </span>
        </div>
    )
}
function RenderPasswordAccessible(props: IPasswordAccessbileProps) {
    const { showPassword, setShowPassword } = props
    return (
        <IconButton onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword) }}>
            {!showPassword &&
                <EyeNoneIcon width={"16"} height={"16"} className="text-teal-600" />
            }
            {showPassword &&
                <EyeOpenIcon width={"16"} height={"16"} className="text-teal-600" />
            }
        </IconButton>
    )
}

export default PasswordInput