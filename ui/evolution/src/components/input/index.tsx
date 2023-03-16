import { FC } from "react";
import { Input as FCInput } from './styles'

type inputProps = {
    disabled: boolean;
}

const Input: FC<inputProps> = ({ disabled }) => {
    return (
        <>
            <FCInput disabled={disabled}/>
        </>
    )
}
export default Input;