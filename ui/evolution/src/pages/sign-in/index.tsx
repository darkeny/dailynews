import styled from "styled-components";
import { Button, Container, Content_Center, Footer, H1, Paragraph } from "./styles";
const SignIn = () => {
    return (
        <>
            <Button>
                Sign-up
            </Button>
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