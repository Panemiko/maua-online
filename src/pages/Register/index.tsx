import React from 'react'
import {
    Main,
    Container,
    Logo,
    Title,
    Line,
    Input,
    Button,
    Link
} from './style'

const RegisterPage: React.FC = () => {

    document.addEventListener(`keydown`, e => {
        if (e.key === `Enter`) sendRegister()
    })

    async function sendRegister() {

        console.log(`Registro enviado`)

    }

    return (
        <Main>
            <Container>
                <Logo src="./img/maua-logo.png" />
                <Title>Cadastro</Title>
                <Line />
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Input type="text" placeholder="Registro" />
                <Button onClick={sendRegister}>Registrar-se</Button>
                <Link to="/login">Entrar</Link>
            </Container>
        </Main>
    )

}

export default RegisterPage
