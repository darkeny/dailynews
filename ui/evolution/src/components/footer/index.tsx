import { FC } from "react";
import { Footer as FCFooter } from './styles'

type footerProps = {
    label: string;
}

const Footer: FC<footerProps> = ({ label }) => {
    return (
        <>
            <FCFooter>{label}</FCFooter>
        </>
    )
}
export default Footer;