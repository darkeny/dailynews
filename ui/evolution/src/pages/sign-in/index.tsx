import Button from "../../components/button";
import Footer from "../../components/footer";
import { Container, Content_Center, Footer_Side, H1, Paragraph } from "./styles";
const SignIn = () => {
    function Headler() {
        console.log('Clicou')
    }
    return (
        <>
            <Button label={'Sign-in'} onClick={Headler} disabled />
            <Container>
                <Content_Center>
                    <H1>Sign-in</H1>
                </Content_Center>
            <Footer_Side>
                <Footer label={'@Copyright 2022 - 2023'}/>
            </Footer_Side>
            </Container>
        </>
    )
}
export default SignIn;