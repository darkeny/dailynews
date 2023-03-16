import { FC } from "react";
import { Form as FCForm } from './styles'

type formProps = {
    onSubmit: () => {}
}

const Form: FC<formProps> = ({ onSubmit }) => {
    return (
        <>
            <FCForm onSubmit={onSubmit}></FCForm>
        </>
    )
}
export default Form;