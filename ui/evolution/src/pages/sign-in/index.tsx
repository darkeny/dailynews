import { Button, Container, Content_Center, Footer, Form, H1, Input, Paragraph } from "./styles";
const SignIn = () => {
    return (
        <>
            <Button>
                Sign-up
            </Button>
            <Container>
                <Content_Center>
                    <H1>Sign-in</H1>
                    <Form action={'#'}>
                        <Input type={'text'}>
                        </Input>
                    </Form>
                </Content_Center>
                <Footer>
                    <Paragraph>@Copyright 2022 - 2023</Paragraph>
                </Footer>
            </Container>
        </>
    )
}
export default SignIn;