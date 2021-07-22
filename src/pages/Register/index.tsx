import React, { useState } from 'react'
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

    // Initialize the input states
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [register, setRegister] = useState(``)

    // Verifies if the Enter key is press
    document.addEventListener(`keydown`, e => {
        if (e.key === `Enter`) sendRegister()
    })

    // Send the register request to the server
    async function sendRegister() {

        console.log(`Registro enviado`)

    }

    return (
        <Main>
            <Container>
                <Logo src="./img/maua-logo.png" />
                <Title>Cadastro</Title>
                <Line />
                <Input type="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail" required />
                <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                <Input type="text" onChange={e => setRegister(e.target.value)} placeholder="Registro" required />
                <Button onClick={sendRegister}>Cadastrar-se</Button>
                <Link to="/login">Entrar</Link>
            </Container>
        </Main>
    )

}

export default RegisterPage
