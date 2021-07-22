import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Main = styled.div`

    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #FFFFFF;

`

export const Container = styled.div`

    width: 495px;
    height: 600px;
    box-sizing: border-box;
    margin: 160px auto 160px auto; 
    background-color: ${props => props.theme.background2};
    border: 1px solid #AAAAAA;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

`

export const Logo = styled.img`

    margin: 45px 80px auto 80px;
    width: 333px;
    height: 88px;

`

export const Title = styled.h1`


    margin: 18px 148px auto 148px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #151515;

`

export const Line = styled.hr`

    margin: 8px 100px auto 100px;
    width: 300px;
    height: 0px;

    border: 1px solid #00000030;

`

export const Input = styled.input`

    margin: 20px 65px auto 65px;
    width: 362px;
    height: 55px;

    text-indent: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

    background: #E2E2E2;
    border-radius: 15px;
    border: 0;

`

export const Button = styled.button`

    margin: 25px 144px 25px 144px;
    width: 205px;
    height: 55px;

    font-family: Roboto;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;

    background: #DA251C;
    border-radius: 20px;
    border: 0px;

    :active {
        background-color: #991813;
    }

`

export const Link = styled(RouterLink)`

    margin: 12px 228px auto 228px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    text-align: center;

    color: #DA251C;

`
