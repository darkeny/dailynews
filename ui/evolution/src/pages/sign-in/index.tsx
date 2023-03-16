import Button from "../../components/button";
import { Container, Content_Center, Footer, H1, Paragraph } from "./styles";
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
                <Footer>
                    <Paragraph>@Copyright 2022 - 2023</Paragraph>
                </Footer>
            </Container>
        </>
    )
}
export default SignIn;