import { FC } from "react";

type buttonProps = {
    label: string;
    disabled: boolean;
    onClick: () => void;
}

const Button: FC<buttonProps> = ({ label, disabled, onClick }) => {
    return (
        <>
            <button onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </>
    )

}
export default Button;