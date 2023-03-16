import { FC } from "react";
import { Button as FCButton } from './styles'

type buttonProps = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

const Button: FC<buttonProps> = ({ label, disabled, onClick }) => {
    return (
        <>
            <FCButton onClick={onClick} disabled={disabled}>
                {label}
            </FCButton>
        </>
    )

}
export default Button;