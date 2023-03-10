import { } from 'styled-components'
import { Button, Container, Content_Center, Footer, H1, Paragraph } from './styles';
const Home = () => {
    return (
        <>
            <Container>
                <Button>
                    Sign-up
                </Button>
                <Content_Center>
                    <H1>Sign in</H1><br />
                    
                </Content_Center>
                <Footer>
                    <Paragraph>
                        @Copyrigth 22-23
                    </Paragraph>
                </Footer>
            </Container>
        </>
    )
}
export default Home;