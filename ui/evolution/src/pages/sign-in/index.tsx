import { Container, Content_Center, Footer, Form, H1, Input, Paragraph } from "./styles";
const SignIn = () => {
    return (
        <>
            <Container>
                <Content_Center>
                    <H1>Sign-in</H1>
                    <Form action={'#'}>
                        <Input type={'text'} name={'username'} required />
                        <Input type={'password'} name={'password'} required />
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