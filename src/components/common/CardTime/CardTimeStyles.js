import styled from "styled-components";
import theme from "../../theme/colors"

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 112px;
    margin-left: 600px;
    border-radius: 30px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
    z-index: 10;
`
const Title = styled.h3`
    font-family: "Roboto",sans-serif;
    font-weight: 700;
`
const InfoDay = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #BDBDBD;

`
const Text = styled.p`
    font-family: "Roboto",sans-serif;
    font-weight: 700;
    margin-left: 10px;
`
const Img = styled.img`
    width: 50px;
`
const ContainerTemp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => theme[props.color]};
    width: 100px;
    border-radius: 0 0 25px;
    color: #fff;
`


export { Container, Title, InfoDay, Text, Img, ContainerTemp }